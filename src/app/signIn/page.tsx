"use client";
import SignIn from "@/components/auth/signIn";
import SignUp from "@/components/auth/signUp";
import { useState } from "react";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 w-full flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: isSignUp ? "translateX(-100%)" : "translateX(0)" }}
      >
        <div className="w-full flex-shrink-0">
          <SignIn onChangeAuthMode={toggleAuthMode} />
        </div>
        <div className="w-full flex-shrink-0">
          <SignUp onChangeAuthMode={toggleAuthMode} />
        </div>
      </div>
    </div>
  );
}
