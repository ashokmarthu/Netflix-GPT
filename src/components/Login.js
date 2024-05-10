import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-[30%] absolute p-12 mx-auto my-24 left-0 right-0 bg-black rounded-lg text-white bg-opacity-80">
        <h1 className="font-bold text-3xl mb-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2.5 my-2 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-2.5 my-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2.5 my-2 rounded"
        />
        <button className="p-2.5 my-3 bg-red-500 w-full rounded-md">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        {signInForm && (
          <>
            <div className="text-center w-full">OR</div>
            <button className="p-2.5 my-3 bg-[#80808066] w-full rounded-md">
              use a sign-in code
            </button>
            <div className="text-center w-full text-sm">Forgot Password ?</div>
            <div className="grid gap-2 my-4">
              <div className="flex items-center">
                <input type="checkbox" className="p-4" />
                <label className="ml-2">Remember me</label>
              </div>
              <div className="cursor-pointer" onClick={toggleSignInForm}>New to Netflix? Sign up now</div>
              <p className="text-xs">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
