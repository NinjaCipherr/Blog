import React from "react";

function LoginPage() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>login</button>
    </form>
  );
}
export default LoginPage;
