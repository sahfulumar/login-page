import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Perform API call here
    try {
      const res = await fetch("endpoints", {
        method: "POST",
        headers: {
          "Content-Type": "app/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      // Assuming the API returns a token upon successful login
      const token = data.token;

      // Call the onLogin function passed as a prop
      onLogin(token);
    } catch (error) {
      console.error("Not able to login", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
