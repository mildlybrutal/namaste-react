import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignINform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value,
    );
    setErrorMessage(message);
    console.log(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
          alt="background"
        />
      </div>

      <form
        className="p-12 w-3/12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Out"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {errorMessage && (
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        )}

        <button
          className="bg-red-700 w-full p-3 my-6 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Out"}
        </button>
        <h1 className="text-center text-gray-300">OR</h1>
        <button className="bg-red-700 w-full p-3 my-6 rounded-lg">
          Sign In with Google
        </button>
        <p className="text-center">Forgot Password ? </p>
        <p className="py-4 text-gray-300">
          {isSignInForm ? "New to Netflix" : "Already a User"} ?{" "}
          <span
            className="font-bold text-white cursor-pointer"
            onClick={toggleSignINform}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
