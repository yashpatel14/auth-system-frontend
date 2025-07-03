import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="shadow-input mx-auto mt-[100px] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-4xl text-center font-bold text-neutral-800 dark:text-neutral-200">
      Reset your password
      </h2>
      <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
      Enter your new password below
      </p>
      <form className="my-8">
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="newpassword">New Password</Label>
          <Input id="newpassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmpassword">Confirm New Password</Label>
          <Input id="confirmpassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>

       
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Update Password &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        
        <div className="flex flex-col gap-2 mt-5">
          
          <div className="text-center text-sm">
            <span className="text-black-300/60">
            Remember your password?{" "}
            </span>

            <Link
              className="hover:underline text-black-200 font-medium"
              to="/login"
              data-discover="true"
            >
              Back to login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword

const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };
  
  const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };