import Link from "next/link";
import CustomLayout from "../_components/customLayout";

const Signup = () => {
  return (
    <CustomLayout>
      <div className="w-[36rem] h-[43.188rem] relative rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-[0rem] pl-[4.437rem] pr-[4.312rem] mq450:pl-[2.188rem] mq450:pr-[2.125rem] mq450:box-border">
        <h1 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          Create your account
        </h1>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
          <div className="w-[2.813rem] h-[1.188rem] relative">
            {/* name */}
            <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] text-[1rem] font-inter text-neutral-black text-left inline-block min-w-[2.813rem] w-full h-full z-[2]">
              Name
            </a>
          </div>
          <div className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full z-[3]">
            <div className="h-[3rem] w-[28.5rem] relative rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
            <input
              className="w-[2.5rem] [border:none] [outline:none] font-inter text-[1rem] bg-[transparent] h-[1.188rem] relative text-neutral-400 text-left inline-block p-0 z-[4]"
              placeholder="Enter"
              type="text"
            />
          </div>
        </div>
        {/* email */}
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
        {/* password */}
        <div
          className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-[1rem] text-neutral-black font-inter gap-[0.375rem] pr-[0.5rem]`}
        >
          <div
            className="relative inline-block z-[1] min-w-[4.688rem]"
          >
            Password
          </div>
          <div className="self-stretch rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] max-w-full z-[1]">
            <div className="h-[3rem] w-[28.5rem] relative rounded-md bg-neutral-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
            <input
              className="w-[2.5rem] [border:none] [outline:none] font-inter text-[1rem] bg-[transparent] h-[1.188rem] relative text-neutral-400 text-left inline-block p-0 z-[2]"
              placeholder="Enter"
              type="password"
            />
          </div>
        </div>

        <button
          className={`cursor-pointer border-neutral-black border-[1px] border-solid py-[1.062rem] px-[1.25rem] bg-neutral-black self-stretch rounded-md overflow-hidden flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-neutral-500 hover:border-neutral-500 hover:border-[1px] hover:border-solid hover:box-border`}
        >
          <div
            className="relative text-[1rem] tracking-[0.07em] leading-[1.2rem] uppercase font-medium font-inter text-neutral-white text-center"
          >
            Create account
          </div>
        </button>
      </form>
      <div className="self-stretch flex flex-row items-start justify-center text-[1rem] text-neutral-500">
        <div className="flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="relative z-[1]">Have an Account?</div>
          <div
            className={`h-[1.125rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border z-[1] text-left text-[1rem] text-neutral-black font-inter`}
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
