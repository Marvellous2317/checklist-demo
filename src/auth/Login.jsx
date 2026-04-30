import React, {useState} from "react";
import { FaCheckCircle } from "react-icons/fa";
import Images from "../assets/images";
import InputField from "../shared/InputField";
import Button from "../shared/button";  
import { Link } from "react-router-dom";

function Login(){

  
    return(
       <div className="flex h-screen w-full flex-col md:flex-row">
        <section className="relative h-64 w-full md:h-full md:w-1/2 justify-start">
        <img
          src={Images.loginBg}
          alt="login image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col  p-6 pb-12 md:p-10 lg:p-20">
          
         <div className="flex flex-row gap-3 ">
          <FaCheckCircle className="text-primary text-4xl bg-[#006953]" />
          <h1 className="mt-2 font-geist text-lg font-semibold text-[#006953]">
            DailyCheck
          </h1>                     
         </div>
          <h2 className="mt-4 font-geist text-2xl font-semibold leading-tight text-white md:text-[32px] md:leading-12">
            Cultivate clarity in your daily workflow.
          </h2>
          <p className="mt-2 text-sm font-medium text-white md:mt-1.25 md:text-base lg:w-120 font-geist">
            Experience the tranquility of a minimalist productivity hub, designed for focus.
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-start overflow-y-auto p-4 md:w-1/2 md:p-10 lg:p-16">
        <div className="w-full max-w-99">
          <h1 className="font-geist text-xl font-semibold text-primary">
            Welcome Back
          </h1>
          <p className="mb-6 mt-1 font-geist text-xs text-tertiary md:mb-7">
            Please enter your details to sign in.
          </p>
          <form  className="mt-6 space-y-4">
            <InputField
              id="email"
              name="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              
              required
              autoComplete="email"
            />

            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              
              required
              autoComplete="current-password"
            />

            <Link
              to="/forgot-password"
              className=" text-xs font-geist flex items-end justify-end -mt-2 text-primary hover:underline"
            >
              Forgot password?
            </Link>

            <Button
              type="submit"
              className="mt-3 w-full rounded-2xl bg-[#006953] px-4 py-3.5 font-geist text-base font-medium text-white hover:opacity-90  flex items-center justify-center"
              > Login </Button>
              
          </form>
        </div>
      </section>
      </div>
      

    )
};

export default Login;