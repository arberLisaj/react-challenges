import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

const App = () => {
  const [signUpStatus, setSignUpStatus] = useState(false);

  return (
    <main>
      <h1>{signUpStatus ? "Sign up" : "Log in"}</h1>
      {signUpStatus ? (
        <SignUp setSignupInformation={(value) => console.log(value)} />
      ) : (
        <Login setLoginInformation={(value) => console.log(value)} />
      )}
      <button
        style={{
          marginTop: "10px",
        }}
        onClick={() => setSignUpStatus((value) => !value)}
      >
        {signUpStatus ? "Have an account? Log in" : "No account? Sign up"}
      </button>
    </main>
  );
};

export default App;
