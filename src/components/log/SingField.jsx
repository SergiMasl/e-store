import React, { useState } from "react";
import { regestar, login } from "./request";

function SingField({ sing }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sing) {
      console.log("sing in process");
      console.log("Submitted:", { username, password });
      login(username, password);
    } else {
      console.log("reg in process");
      console.log("Submitted:", { username, password });
      regestar(username, password);
    }
  };

  return (
    <div className="singfield--wrap">
      <h2>{sing ? "Sing In" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="* E-mail address"
        />

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="* Password"
        />
        <button type="submit">{sing ? "Sing In" : "Register"}</button>
      </form>
    </div>
  );
}

export default SingField;
