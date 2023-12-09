import React, { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
  };

  return (
    <div>
      {token ? (
        <div>
          <h1>Welcome to home page</h1>
          {/* Display authenticated content here */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
