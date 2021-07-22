import React from "react";
import Userfront from "@userfront/react";
import Navbar from "../components/navbar.js";

const PasswordResetForm = Userfront.build({
  toolId: "dkbmmo",
});

function PasswordReset() {
  return (
    <div>
      <Navbar />
      <PasswordResetForm />
    </div>
  );
}

export default PasswordReset;
