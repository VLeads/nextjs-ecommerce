"use client"
import Link from "next/link";
import CustomLayout from "../_components/customLayout";

const Login = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">

      <form
        className={`m-0 w-[36rem] rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-center pt-[2.5rem] px-[3.687rem] pb-[3.125rem] gap-[1.812rem] max-w-full mq750:pt-[1.625rem] mq750:px-[1.813rem] mq750:pb-[2rem] mq750:box-border`}
        onSubmit={handleSubmit}
      >
        <div className="w-[36rem] h-[38.375rem] relative rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[0.437rem]">
          <h1 className="m-0 relative text-[2rem] font-semibold font-inter text-neutral-black text-left inline-block min-w-[5.375rem] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Login
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.187rem] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
            <h3 className="m-0 relative text-[1.5rem] font-medium font-inter text-neutral-black text-left z-[1] mq450:text-[1.188rem]">
              Welcome back to ECOMMERCE
            </h3>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[1.25rem]">
              <div className="relative text-[1rem] font-inter text-neutral-black text-left z-[1]">
                The next gen business marketplace
              </div>
            </div>
          </div>
        </div>
        <div
          className={`self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full text-left text-[1rem] text-neutral-black font-inter`}
        >
          <div
            className="relative inline-block min-w-[2.563rem] z-[1]"
          >
            Email
          </div>
          <div className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full z-[1]">
            <div className="h-[3rem] w-[28.5rem] relative rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
            <input
              className="w-[2.5rem] [border:none] [outline:none] font-inter text-[1rem] bg-[transparent] h-[1.188rem] relative text-neutral-400 text-left inline-block p-0 z-[2]"
              placeholder="Enter"
              type="email"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.687rem] box-border gap-[0.375rem] max-w-full">
          <div className="relative text-[1rem] font-inter text-neutral-black text-left inline-block min-w-[4.688rem] z-[1]">
            Password
          </div>
          <div className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[0.812rem] px-[0.937rem] pb-[0.687rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap">
            <div className="h-[3rem] w-[28.5rem] relative rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
            <div className="relative text-[1rem] font-inter text-neutral-400 text-left inline-block min-w-[2.5rem] z-[2]">
              Enter
            </div>
            <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem]">
              <button
                className="w-[2.531rem] [border:none] [outline:none] bg-[transparent] h-[1.125rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border font-inter text-[1rem] text-neutral-black"
                >
                Show
                </button>
              <div className="w-[2.625rem] h-[0.063rem] relative rounded-10xs bg-neutral-black shrink-0 z-[3]" />
            </div>
          </div>
        </div>
        <button
          className={`cursor-pointer border-neutral-black border-[1px] border-solid py-[1.062rem] px-[1.25rem] bg-neutral-black self-stretch rounded-md overflow-hidden flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-neutral-500 hover:border-neutral-500 hover:border-[1px] hover:border-solid hover:box-border`}
        >
          <div
            className="relative text-[1rem] tracking-[0.07em] leading-[1.2rem] uppercase font-medium font-inter text-neutral-white text-center"
          >
            Login
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-center text-[1rem] text-neutral-500">
          <div className="flex flex-row items-start justify-start gap-[0.625rem]">
            <div className="relative z-[1]">Don&apos;t have an Account?</div>
            <div
              className={`h-[1.125rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border z-[1] text-left text-[1rem] text-neutral-black font-inter`}
            >
              <Link className="relative tracking-[0.07em] uppercase font-medium inline-block min-w-[3.438rem]"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default Login;
