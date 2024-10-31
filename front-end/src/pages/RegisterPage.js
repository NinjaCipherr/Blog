import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(event) {
    event.preventDefault(); // toi khong muon bi chuyen trang khi click vao nut register

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("registeration is successful");
    } else {
      alert("registeration is failed");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button>Register</button>
    </form>
  );
}
export default RegisterPage;
