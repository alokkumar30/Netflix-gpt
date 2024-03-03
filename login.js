import React, { useState } from "react";
import Header from "./header";

const Login = () => {
    const [isSignInFrom, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInFrom);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="logo"
                />
            </div>

            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90">

                <h1 className="font-bold text-3xl py-4">
                    {isSignInFrom ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInFrom && <input
                    type="text"
                    placeholder="Full name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />}

                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />

                <button
                    className="p-4 my-6 cursor-pointer bg-red-800 w-full rounded-lg"
                >

                    {isSignInFrom ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInFrom
                        ? "New to Netflix? Sign Up Now"
                        : "Already Registered !! Sign In Now"}
                </p>
                
            </form>
        </div>
    );
};

export default Login;
