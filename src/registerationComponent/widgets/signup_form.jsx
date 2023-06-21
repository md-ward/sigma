import { AttentionSeeker } from "react-awesome-reveal";
import useRegisterStore from "../controller/regestration_controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';

const SignupForm = () => {
    const { toLogin } = useRegisterStore()

    const [showPassword, setshowPassword] = useState(false);

    const touggleShowPassword = () => {
        setshowPassword(!showPassword)
    }
    return (

        <>
            <div className="bg-white md:w-1/3 flex flex-col h-full justify-center items-center">
                <div className="w-2/3  ">
                    <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                        Create an account
                    </h1>
                    {/* Registration form */}

                    <AttentionSeeker >
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Password
                                </label>
                                <span className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="new-password"
                                        className="relative border  border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                                    />
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="absolute top-1/3 -right-7 cursor-pointer text-indigo-800" onClick={touggleShowPassword} />

                                </span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember_me"
                                    name="remember_me"
                                    className="mr-2"
                                />
                                <label htmlFor="remember_me" className="text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-700 text-white rounded py-2 px-4 hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </AttentionSeeker>

                    <p className="text-gray-600 mt-6 text-center">
                        Already have an account?{" "}
                        <button className="text-indigo-700 hover:text-indigo-800" onClick={toLogin}>
                            Log in
                        </button>
                    </p>
                </div>
            </div>
        </>

    );
}

export default SignupForm;