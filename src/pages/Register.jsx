import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAccount } from "../store/Slices/authSlice";
import { toast } from "react-toastify";

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch ();

  const onSubmit = async(data) => {
    try {
      const response = await dispatch(createAccount(data)).unwrap();
      toast.success(response.message || "Registered successfully!!!")
      navigate("/login");
    } catch (error) {
      console.log(error)
      toast.error(
        error.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="shadow-input mx-auto mt-[20px] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-4xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Create your account
      </h2>
      <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Join us today and get started
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
      <LabelInputContainer className="mb-4">
  <Label htmlFor="avatar">Avatar</Label>
  <Input
    id="avatar"
    type="file"
    accept="image/*"
    {...register("avatar")}
  />
  {errors.avatar && (
    <p className="text-red-500 text-sm">{errors.avatar.message}</p>
  )}
</LabelInputContainer>


        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <LabelInputContainer className="mb-4">
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" {...register("fullname", {
                    required: "Full name is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })} placeholder="John" type="text" />
                  {errors.fullname && (
                <p className="text-red-500 text-sm">
                  {errors.fullname.message}
                </p>
              )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })} placeholder="projectmayhem@fc.com" type="email" />
                  {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })} placeholder="••••••••" type="password" />
                  {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          variant={"outline"}
        >
          {}
          Create Account &rarr;
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
            <Link  className="hover:underline text-black-200 font-medium"
              to="/login"
              data-discover="true">
            
              Sign in
              </Link>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

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
