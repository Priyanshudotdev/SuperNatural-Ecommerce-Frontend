import { useState } from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const Auth = () => {
  const [isLoginActive, setIsLoginActive] = useState<boolean>(true);

  // Add navigation and error handling for forms
  // Assume Login and Signup accept onSuccess and onError props
  const [error, setError] = useState<string>("");
  const handleSuccess = () => {
    window.location.href = "/";
  };
  const handleError = (msg: string) => {
    setError(msg);
  };
  return (
    <div className="flex justify-center items-center w-full h-screen px-5 md:px-10 lg:px-20 font-space pt-[5vh] md:pt-[10vh] lg:pt-[12vh] ">
      <main className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => { setIsLoginActive(true); setError(""); }}
            className={`w-1/2 py-2 ${
              isLoginActive ? "bg-black text-white" : "bg-gray-100"
            } border border-r-0 border-gray-300 rounded-l-lg`}
          >
            Login
          </button>
          <button
            onClick={() => { setIsLoginActive(false); setError(""); }}
            className={`w-1/2 py-2 ${
              !isLoginActive ? "bg-black text-white" : "bg-gray-100"
            } border border-gray-300 rounded-r-lg`}
          >
            Sign Up
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-center mb-2">{error}</div>
        )}
        <div className="h-[26rem]">
          {isLoginActive ? (
            <Login onSuccess={handleSuccess} onError={handleError} />
          ) : (
            <Signup onSuccess={handleSuccess} onError={handleError} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Auth;
