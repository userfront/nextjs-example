import React from "react";
import Userfront from "@userfront/react";
import Navbar from "../components/navbar.js";

const SignupForm = Userfront.build({
  toolId: "nkmbbm",
});

function Signup() {
  return (
    <div>
      <Navbar />
      <SignupForm />
    </div>
  );
}

export default Signup;
