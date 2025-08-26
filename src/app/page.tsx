"use client";

import RegisterForm from "@/components/templates/forms/register";
import { useState } from "react";

import LoginForm from "@/components/templates/forms/login";
import { Button } from "@material-tailwind/react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>
        {toggle ? "Switch to Login" : "Switch to Register"}
      </Button>
      {toggle ? <RegisterForm /> : <LoginForm />}
    </>
  );
}
