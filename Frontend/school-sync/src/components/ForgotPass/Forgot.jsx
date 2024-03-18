import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import Footer from '../LandingPage/Footer/Footer';

function Forgot() {
  return (
    <div>
      <section className="bg-whitesmoke-200">
        <header className="max-w-[90rem] mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-2xl font-semibold flex items-center space-x-3 no-underline">
                <img
                  src={logo}
                  alt="School-Sync Logo"
                  className="w-10 inline-block items-center"
                />{" "}
                <span className="text-red no-underline text-3xl">
                  S<span className="text-[#263238]">chool-Sync</span>
                </span>
              </Link>
            </div>
            <Link to="/login">
              <button className="text-lg bg-[#FF4800] text-white px-5 py-2 rounded-md cursor-pointer">
                Login
              </button>
            </Link>
          </nav>
        </header>
      </section>
      <section class="bg-gray-50 dark:bg-gray-900 pb-[-10] top-8">
    <div class="flex flex-col items-center justify-center pb-3 mx-auto md:h-screen lg:py-0">
        <div class="w-full pb-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Forgot Password?
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required="" />
                </div>

                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
            </form>
        </div>
    </div>
</section>

<Footer/>

    </div>
  );
}

export default Forgot;
