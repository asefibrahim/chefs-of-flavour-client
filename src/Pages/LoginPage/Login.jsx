import React, { useContext, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const newLoggedUser = result.user
                console.log(newLoggedUser);
                setSuccess("You Have Successfully Logged in by Google")
                navigate(from, { replace: true })
                    .catch(error => {
                        setError(error.message)
                    })
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const newLoggedUser = result.user
                console.log(newLoggedUser);
                setSuccess("You Have Successfully Logged in by Github")
                navigate(from, { replace: true })
                    .catch(error => {
                        setError(error.message)
                    })
            })

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value



        signIn(email, password)
            .then(result => {
                const NewUser = result.user
                console.log(NewUser);
                setSuccess('You Have Successfully Logged in')
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })







    }
    return (
        <div>



            <div class="relative bg-[url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-[700px] ">
                <div class="flex items-center justify-center w-full h-full    absolute inset-0 bg-black/60 ">
                    {/* 
                   
                   start from
                   */}


                    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div class="flex justify-center mx-auto">
                            <h1 className='text-gray-300 text-5xl mb-16 font-bold'>Please Login</h1>
                        </div>



                        <a onClick={handleGoogleLogin} class="flex items-center justify-center mt-4 text-gray-200 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-600">
                            <div class="px-4 py-2">
                                <svg class="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>

                            <span class="w-5/6 px-4 py-3 font-bold text-center">Login  with Google</span>
                        </a>
                        <a onClick={handleGitHubSignIn} class="flex items-center justify-center mt-4 text-gray-200 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-600">
                            <div class="px-4 py-2">
                                <p className='text-2xl'> <FaGithub></FaGithub></p>
                            </div>

                            <span class="w-5/6 px-4 py-3 font-bold text-center ">Login with Github</span>
                        </a>

                        <div class="flex items-center justify-between mt-4">
                            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                            <a href="#" class="text-xs text-center text-gray-200 uppercase dark:text-gray-400 hover:underline"> or You can login
                                with email</a>

                            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit}>


                            <div class="mt-4">
                                <label class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                                <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-300bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name='email' required />
                            </div>

                            <div class="mt-4">
                                <div class="flex justify-between">
                                    <label class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200" for="loggingPassword">Password</label>
                                    <a href="#" class="text-xs text-gray-200 dark:text-gray-300 hover:underline">Forget Password?</a>
                                </div>

                                <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-300bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" name='password' required />
                            </div>

                            <div class="mt-6">
                                <button type='submit' class="w-full px-6 py-3 text-sm font-medium tracking-wide text-gray-300 capitalize transition-colors duration-300 transform bg-purple-800 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Login In
                                </button>
                            </div>

                        </form>

                        <div class="flex items-center justify-between mt-4">
                            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                            <Link to='/signup' class=" text-xs font-semibold text-gray-200 uppercase dark:text-gray-400 hover:underline">Don't Have Account ?  Sign up</Link>

                            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>

                        <p className='text-red-500 text-lg font-semibold pt-3 text-center'>{error}</p>
                        <p className='text-green-400 text-lg font-semibold pt-3 text-center' >{success}</p>



                        {/* last */}
                    </div>
                </div>
            </div>




        </div>);
};

export default Login;