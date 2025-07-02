import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ResendVerificationEmail = () => {
  return (
    <div className="shadow-input mx-auto mt-[100px] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-3xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Resend Verification Email
      </h2>
      <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Enter your email to receive a new verification link
      </p>

      <div
        data-slot="card"
        className="text-card-foreground mt-2 flex flex-col gap-6 rounded-xl border border-white/10 bg-white-900 py-6 shadow-sm mb-6"
      >
        <div data-slot="card-content" className="px-6">
          <div className="flex items-start space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail h-5 w-5 text-black-50 mt-0.5"
              aria-hidden="true"
            >
              <path d="M22 7L13.009 12.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-black-200 mb-1">
                Need to verify your email?
              </h4>
              <p className="text-xs text-black-300/75">
                If you didn't receive the verification email or if it expired,
                you can request a new one using the form below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Verification Email &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div
  data-slot="card"
  className="text-card-foreground flex flex-col gap-6 rounded-xl border border-white/10 bg-black-900 py-6 shadow-sm"
>
  <div
    data-slot="card-content"
    className="px-6 text-center space-y-1"
  >
    <p className="text-black-300/60 text-sm">
      
        <Link className="hover:text-black-200 inline-flex items-center"
        to="/login"
        data-discover="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left h-4 w-4 mr-1"
          aria-hidden="true"
        >
          <path d="M12 19L5 12l7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to login
        </Link>
    </p>
    <p className="text-black-300/60 text-sm">
      Don't have an account?{" "}
      
        <Link className="text-black-100 hover:underline"
        to="/register"
        data-discover="true">
        Sign up
        </Link>
      
    </p>
  </div>
</div>

      </form>
    </div>
  );
};

export default ResendVerificationEmail;

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
