<?php

use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\Auth\GuardianController;
use App\Http\Controllers\Auth\InstructorController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\EnrollmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//user_routes
Route::post('registration',[UserController::class,'registration']);
Route::post('login',[UserController::class,'login']);
Route::post('token/ability',[UserController::class,'checkAbility']);
Route::group(['middleware' => ['auth:sanctum','abilities:user']], function() {
    Route::get('logout',[UserController::class,'logout']);
    Route::get('user/details',[UserController::class,'getDetails']);
    Route::get('user/courses', [CourseController::class, 'getAllCourses']);
    Route::get('user/course/{id}', [CourseController::class, 'details']);
    Route::get('enroll/course/{id}',[EnrollmentController::class,'enroll']);
    Route::get('unenroll/course/{id}',[EnrollmentController::class,'unenroll']);
    Route::get('/enrolled-courses', [EnrollmentController::class, 'getEnrolledCourses']);
    Route::get('user/course/{id}/contents', [ContentController::class, 'showCourseContents']);
    Route::get('/course/{id}/assignments', [AssignmentController::class, 'showCourseAssignments']);
    Route::post('/assignment/answer/upload', [AssignmentController::class, 'uploadAssignmentAnswer']);
    Route::post('/mcq/answer/upload', [AssignmentController::class, 'mcqAnswer']);
    Route::get('/course/enrolled/or/not/{course_id}', [CourseController::class, 'enrolledOrNot']);
    Route::get('/content/exam/attempt/or/not/{content_id}', [ContentController::class, 'examAttemptOrNot']);
    Route::get('marks/course/{course_id}', [CourseController::class, 'userTotalMarks']);
    Route::get('marks/content/{content_id}', [CourseController::class, 'userMarks']);
});

//instructor_routes
Route::post('instructor/registration',[InstructorController::class,'registration']);
Route::post('instructor/login',[InstructorController::class,'login']);
Route::group(['middleware' => ['auth:sanctum','abilities:instructor']], function() {
    Route::get('instructor/details',[InstructorController::class,'getDetails']);
    Route::get('/courses', [CourseController::class, 'getAllCourses']);
    Route::get('instructor/course/{id}', [CourseController::class, 'details']);
    Route::post('/content/create', [ContentController::class, 'create']);
    Route::post('/courses/instructor', [CourseController::class, 'getCoursesByInstructorName']);
    Route::get('/course/{id}/contents', [ContentController::class, 'showCourseContents']);
    Route::post('/assignment/create', [AssignmentController::class, 'create']);
    Route::get('/instructor/course/{id}/assignments', [AssignmentController::class, 'showCourseAssignments']);
    Route::get('/instructor/assignment/{id}/answer', [AssignmentController::class, 'showAssignmentAnswer']);
    Route::get('/instructor/marks/course/{user_id}/{course_id}', [AssignmentController::class, 'showMarks']);
    Route::get('/instructor/marks/content/{user_id}/{content_id}', [AssignmentController::class, 'getUserContentMarks']);
    Route::get('/instructor/course/{id}/total/users',[CourseController::class,'totalUsers']);
});

//admin_routes
Route::post('admin/registration',[AdminController::class,'registration']);
Route::post('admin/login',[AdminController::class,'login']);
Route::group(['middleware' => ['auth:sanctum','abilities:admin']], function() {
    Route::get('admin/details',[AdminController::class,'getDetails']);
    Route::get('all/user',[AdminController::class,'getAllUser']);
    Route::get('all/instructor',[AdminController::class,'getAllInstructor']);
    Route::post('set/instructor',[CourseController::class,'setInstructor']);
    Route::post('create/course',[CourseController::class,'create']);
    Route::get('/courses', [CourseController::class, 'getAllCourses']);
    Route::get('/get/instructor/{id}', [CourseController::class, 'getInstructor']);
    Route::get('course/status/{id}',[CourseController::class,'status']);
    Route::get('/admin/course/{id}/total/users',[CourseController::class,'totalUsers']);
    Route::get('total/users',[AdminController::class,'totalUsers']);
    Route::get('total/instructors',[AdminController::class,'totalInstructors']);
    Route::get('total/admins',[AdminController::class,'totalAdmins']);
    Route::get('total/courses',[AdminController::class,'totalCourses']);
});


//guardian_routes
Route::post('guardian/registration',[GuardianController::class,'registration']);
Route::post('guardian/login',[GuardianController::class,'login']);
Route::group(['middleware' => ['auth:sanctum','abilities:guardian']], function() {
    Route::get('guardian/details',[GuardianController::class,'getDetails']);
});
