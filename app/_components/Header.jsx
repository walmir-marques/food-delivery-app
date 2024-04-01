"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <header className="h-24 flex justify-between items-center p-6 md:px-20 shadow-sm  ">
      <Image
        src="/foodie-logo.png"
        width={150}
        height={150}
        priority
        alt="My store logo"
      />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input
          type="text"
          className="bg-transparent w-full outline-none"
          placeholder="Search Food ..."
        />
        <Search />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5 ">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </header>
  );
};
export default Header;
