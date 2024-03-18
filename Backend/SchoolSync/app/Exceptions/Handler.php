<?php

namespace App\Exceptions;

use Dotenv\Exception\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Exceptions\HttpResponseException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        if($exception instanceof \Laravel\Sanctum\Exceptions\MissingAbilityException){
            return response()->json([
                'errors' => [
                    'status'=> 401,
                    'message'=>'unauthenticated',
                ]
            ]);
        }
        $e = $this->prepareException($exception);
        if($e instanceof HttpResponseException){
            return $e->getResponse();
        }else if($e instanceof AuthenticationException){
            return $this->unauthenticated($request,$e);
        }else if($e instanceof ValidationException){
            return $this->convertValidationExceptionToResponse($exception,$request);
        }
        return $this->prepareResponse($request, $e);
    }
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return response()->json([
            'errors' => [
                'status'=> 401,
                'message'=>'unauthenticated',
            ]
        ]);
    }

}