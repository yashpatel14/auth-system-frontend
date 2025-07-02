import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="shadow-input mx-auto mt-[100px] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-4xl text-center font-bold text-neutral-800 dark:text-neutral-200">
      Welcome back
      </h2>
      <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
      Sign in to your account to continue
      </p>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <div className="flex justify-between mb-3">
          <div className="order-first flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberme"
              className="w-4 h-4 accent-black"
            />
            <label htmlFor="rememberme" className="text-sm">
              Remember me
            </label>
          </div>

          <div className="order-last">
            <label htmlFor="forgotpassword" className="text-sm cursor-pointer">
              Forgot password?
            </label>
          </div>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div className="text-center text-sm">
            <span className="text-black">Already have an account? </span>
            
                <Link className="hover:underline text-black-200 font-medium"
              to="/register"
              data-discover="true">
              Sign up
              </Link>
            
          </div>
          <div className="text-center text-sm">
            <span className="text-black-300/60">Need to verify your email? </span>
            <a
              className="hover:underline text-black-200 font-medium"
              href="/resend-verification"
              data-discover="true"
            >
              Resend verification
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

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
