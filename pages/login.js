import React from "react";
import Userfront from "@userfront/react";
import Navbar from "../components/navbar.js";

const LoginForm = Userfront.build({
  toolId: "alnkkd",
});

function Login() {
  return (
    <div>
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default Login;
