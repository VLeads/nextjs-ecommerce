'use client';
import Link from "next/link";
import CustomLayout from "../_components/customLayout";
import { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";


const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const router = useRouter();

  // Define mutation for signup
  const signupMutation = api.auth.register.useMutation({
    onSuccess: async () => {
      console.log('success-----')
      router.push(`/verify?email=${email}`);
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
      setIsLoading(false);
      // Optionally redirect or show a success message
    },
    onError: (error) => {
      setIsLoading(false)
      console.log('err----')
      setError(error.message || "An error occurred during signup.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate({ username, email, password });
    setIsLoading(true);
  };

  return (
    <CustomLayout>
      <div className="w-[36rem] h-[43.188rem] relative rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-[0rem] pl-[4.437rem] pr-[4.312rem] mq450:pl-[2.188rem] mq450:pr-[2.125rem] mq450:box-border">
        <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          Create your account
        </h1>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]"
      onSubmit={handleSubmit}
      >
      <div
          className={`self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full text-left text-[1rem] text-neutral-black font-inter`}
        >
          <div
            className="relative inline-block min-w-[2.563rem]"
          >
            Name
          </div>
          <input className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full"
              placeholder="Enter"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          
        </div>
        {/* email */}
        <div
          className={`self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full text-left text-[1rem] text-neutral-black font-inter`}
        >
          <div
            className="relative inline-block min-w-[2.563rem]"
          >
            Email
          </div>
          <input className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full"
              placeholder="Enter"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        {/* password */}
        <div
          className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-[1rem] text-neutral-black font-inter gap-[0.375rem] pr-[0.5rem]`}
        >
          <div
            className="relative inline-block min-w-[4.688rem]"
          >
            Password
          </div>
          <input className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full"

              placeholder="Enter"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className={`cursor-pointer border-neutral-black border-[1px] border-solid py-[1.062rem] px-[1.25rem] bg-neutral-black self-stretch rounded-md overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-neutral-500 hover:border-neutral-500 hover:border-[1px] hover:border-solid hover:box-border`}
          disabled={isLoading}
        >
          <div
            className="relative text-[1rem] tracking-[0.07em] leading-[1.2rem] uppercase font-medium font-inter text-neutral-white text-center"
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </div>
        </button>
      </form>
      <div className="self-stretch flex flex-row items-start justify-center text-[1rem] text-neutral-500">
        <div className="flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="relative">Have an Account?</div>
          <div
            className={`h-[1.125rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-left text-[1rem] text-neutral-black font-inter`}
          >
            <Link className="relative tracking-[0.07em] uppercase font-medium inline-block min-w-[3.438rem]"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Signup;
