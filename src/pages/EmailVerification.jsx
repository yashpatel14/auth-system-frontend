import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { fetchUser, verifyEmail } from '../store/Slices/authSlice';
import { CheckCircle, RefreshCw, XCircle } from 'lucide-react';

const EmailVerification = () => {

  const {token} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [verificationStatus, setVerificationStatus] = useState("loading");


const [countdown, setCountdown] = useState(3);



useEffect(() => {
  const verifyAndFetchProfile = async () => {
    if (!token) return;

    
    try {
      const result = await dispatch(verifyEmail(token)).unwrap();
      toast.success(result || "Email verified successfully.");
      console.log(result)
      setVerificationStatus("success");

      // Countdown and fetch profile
      let seconds = 3;
      setCountdown(seconds);

      const interval = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);
        if (seconds <= 0) clearInterval(interval);
      }, 1000);

      setTimeout(async () => {
        try {
          const profile = await dispatch(fetchUser()).unwrap();
          console.log("data",profile)
          // dispatch(setCredentials({ user: profile }));
          toast.success("Login successful");
          navigate("/dashboard");
        } catch (error) {
          toast.error(error || "Failed to fetch user profile");
        }
      }, 3000);
    } catch (error) {
      console.log(error)

      toast.error(error || "Email verification failed");
      setVerificationStatus("error");
    }
  };

  verifyAndFetchProfile();
}, [token, dispatch, navigate]);


const renderContent = () => {
  switch (verificationStatus) {
    case "loading":
      return (
        <div className="text-center text-zinc-50 space-y-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-zinc-200" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Verifying your email</h2>
            <p className="text-zinc-300/70">
              Please wait while we verify your email address...
            </p>
          </div>
        </div>
      );

    case "success":
      return (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-200 mb-2">
              Email Verified!
            </h2>
            <p className="text-zinc-300/70">
              Your email has been successfully verified. You can now access
              all features of your account.
            </p>
            <p className="text-sm text-zinc-100 mt-2">
              Redirecting to your dashboard in{" "}
              <span className="font-medium">{countdown}</span> second
              {countdown !== 1 && "s"}...
            </p>
          </div>
          <Link to="/login">
            <Button className="w-full cursor-pointer" variant={"outline"}>
              Continue to Login
            </Button>
          </Link>
        </div>
      );

    case "error":
      return (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-200 mb-2">
              Verification Failed
            </h2>
            <p className="text-zinc-300/70">
              We couldn't verify your email. The link may be invalid or expired.
            </p>
          </div>
          <Link to="/resend-verification">
            <Button className="w-full cursor-pointer" variant={"outline"}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Resend Verification Email
            </Button>
          </Link>
        </div>
      );

    default:
      return null;
  }
};


  return (
    <div className="shadow-xl/30 mx-auto mt-[100px] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-3xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Email Verification
        </h2>
        <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Verify your email address to complete registration
        </p>

        {/* <div className="shadow-xl/30 mx-auto mt-5 w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <h2 className="text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200">
            Password reset email sent
          </h2>
          <p className="mt-2 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Verify your email address to complete registration
          </p>
          <p className="mt-5 text-center max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Didn't receive the email? Check your spam folder or try again.
          </p>

          <button
            className="group/btn mt-5 relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send Again &rarr;
            <BottomGradient />
          </button>
          <div
          data-slot="card"
          className="text-card-foreground mt-5 flex flex-col gap-6 rounded-xl border border-white/10 bg-black-900 py-6  shadow-xl/30"
        >
          <div data-slot="card-content" className="px-6 text-center space-y-1">
            <p className="text-black-300/60 text-sm">
              <Link
                className="hover:text-black-200 inline-flex items-center"
                to="/login"
                data-discover="true"
              >
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
            
          </div>
        </div>
        </div> */}
      </div>
  )
}

export default EmailVerification