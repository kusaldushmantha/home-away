'use client'
import React from 'react';
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const handleSignOut = () => {
    toast('You have been signed out');
  }
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  )
}

export default SignOutLink