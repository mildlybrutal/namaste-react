import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
//import { PROFILE_PICTURE } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate(); // Takes the user to browse page after login
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error message when toggling form
  };

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = isSignInForm ? null : nameRef.current?.value;

    const message = checkValidData(email, password, name);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL:
              "https://avatars.githubusercontent.com/u/150813801?s=400&u=29e367f9559c8ea56079903c0992e32218a44000&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user); //Dispatch Action
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("user not found");
          console.log(errorCode + ": " + errorMessage);
        });
    }
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
        className="p-12 w-3/12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={passwordRef}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-center text-gray-300">OR</h1>
        <button className="bg-red-700 w-full p-3 my-6 rounded-lg">
          Sign In with Google
        </button>
        <p className="text-center">Forgot Password?</p>
        <p className="py-4 text-gray-300">
          {isSignInForm ? "New to Netflix" : "Already a user"}?{" "}
          <span
            className="font-bold text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
