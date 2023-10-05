import { useState } from "react";
import login from "./utils";

// TODO:
// - The login button should trigger the login() action imported above and pass the required data to it.
// - Disable the Login button if the email is blank or if the password is under 6 letters
// - Disable the Login button while login login action is performed
// - Show an error message from the login() if login fails. The error should be cleared every time users reenters details
// - Show an alert box (native javascript alert) if login is succeeds.

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      alert("Login Successful");
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const disableButton = !email || password.length < 6 || isLoading;
  return (
    <main>
      <p className="note">
        note: password is <strong>password</strong>
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="emailinput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          type="email"
          required
        />
        <input
          name="passwordinput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
        <button disabled={disableButton} type="submit">
          login
        </button>
      </form>
      <p className="error">{error}</p>
    </main>
  );
};

export default App;
