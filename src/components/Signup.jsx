import React from 'react'

const Signup = () => {
    return (
        <div>
            <div className="flex h-screen justify-center bg-neutral-950">
                <div className="bg-red-00 w-[70%] text-white">
                    <div className="grid place-items-center">
                        <img className="mt-6 w-10" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" />

                        <div className="mt-6 inline-block text-center">
                            <h2 className="text-5xl font-bold">Sign up to</h2>
                            <h2 className="py-2 text-5xl font-bold">start listening</h2>
                        </div>

                        <div className="bg-blue-40 mt-8">
                            <label htmlFor="helper-text" className="mb-2 block text-sm font-bold text-white">Email address</label>
                            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="block w-80 rounded-lg border border-neutral-400 bg-neutral-950 p-2.5 text-sm font-semibold text-gray-900 placeholder-gray-400" placeholder="name@domain.com" />
                            <p id="helper-text-explanation" className="mt-2 text-sm font-semibold text-neutral-100">Create your <a href="#" className="hover:underlin font-medium text-green-400">account here</a>.</p>
                        </div>

                        <div className="mt-5">
                            <button className="rounded-full bg-green-500 px-28 py-3">Create Account</button>
                        </div>
                    </div>

                    <div className="flex items-stretch justify-center">
                        <hr className="mt-8 w-36" />
                        <span className="mx-3 mt-[18px] text-[16px] font-semibold text-neutral-300">or</span>
                        <hr className="mt-8 w-36" />
                    </div>

                    <div className="mt-8 grid place-items-center">
                        <button type="button" className="mb-2 me-2 inline-flex items-center rounded-full border border-neutral-500 bg-neutral-950 px-24 py-3.5 text-center text-sm font-medium text-white hover:border-neutral-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-ms-1 me-2 h-4 w-4" viewBox="0 0 256 262">
                                <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                                <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                            </svg>
                            <span className="text-sm font-bold">Sign in with Apple</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
