import React, {useState} from "react";
import { FaCheckCircle } from "react-icons/fa";
import Icons from "../assets/icons.js";
import InputField from "../shared/InputField.jsx";
import Button from "../shared/Button.jsx";  
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Images from "../assets/images.js";


function CreateUser(){

  // 1. Add useState at the top of your component
const [name, setName] =useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

 // Dummy credentials (delete these when your API is ready)
const DUMMY_USERS = [
  { email: "marvellousbraimah71@gmail.com", password: "admin123", role: "admin" },
  { email: "braimahmarvellous16@gmail.com", password: "user123", role: "user" },
];

const handleCreateUser = (e) => {
  e.preventDefault();
 
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Find a matching user
  const matchedUser = DUMMY_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!matchedUser) {
    alert("Invalid email or password.");
    return;
  }

  setTimeout(() => {
    navigate(matchedUser.role === "admin" ? "/admin" : "/user");
  }, 1000);
};
  
    return(
       <div className="flex h-screen w-full flex-col md:flex-row">
  <section className="relative h-64 w-full md:h-full md:w-1/2 justify-center min-h-screen">
   <div >
    <img
      src={Images.loginBg}
      alt="login image"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="absolute inset-0 bg-white opacity-15"></div>

    <div className="absolute inset-0 flex flex-col p-6 ">
  <div className="rounded-2xl p-6 flex flex-col gap-4 h-full mt-20"  >
        <div className="flex flex-row gap-2 items-center mt-3">
          <img
            src={Icons.logo}
            alt="dailycheck logo"
            className="w-5 md:w-6 lg:w-7 "
          />

          <h1 className="font-geist text-[1.4rem] font-semibold text-[#4ADE80]">
            DailyCheck
          </h1>
        </div>

        <div>
        <h2 className="font-geist text-2xl max-w-md font-semibold leading-tight text-white md:text-[32px] ">
          Cultivate clarity in your workflow.
        </h2>

        <p className=" text-sm font-normal mt-2.5 text-white md:text-base font-geist max-w-sm">
          Experience the tranquility of a minimalist productivity hub, designed for focus.
        </p>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section className="flex w-full flex-col items-center justify-start overflow-y-auto p-4 md:w-1/2 md:p-10 lg:p-16">
    <div className="w-full max-w-99">
      <h1 className="font-geist text-xl font-semibold text-primary">
        Welcome!
      </h1>
      <p className="mb-6 mt-1 font-geist text-xs text-tertiary md:mb-7">
        Please enter your details to create your account.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleCreateUser}>
        <InputField
          id="name"
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          autoComplete="name"
        />
        
        <InputField
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
          autoComplete="email"
        />

        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
          autoComplete="current-password"
        />

        <Link
          to="/forgot-password"
          className="text-xs font-geist flex items-end justify-end -mt-2 text-primary hover:underline"
        >
          Forgot password?
        </Link>

        <Button
          type="submit"
          className="mt-3 w-full rounded-2xl bg-[#22C55E] px-4 py-3.5 font-geist text-base font-medium text-white hover:opacity-90 flex items-center justify-center"
        >
          Sign Up
        </Button>
      </form>
    </div>
  </section>
</div>

    )
};

export default CreateUser;
