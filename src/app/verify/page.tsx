"use client"
import React, { useState, useRef } from 'react';

export default function Verify() {
  const [otp, setOtp] = useState<string[]>(new Array(8).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on next input
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    alert(`Entered OTP is: ${otp.join("")}`);
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-neutral-black font-inter`}
    >
      <div className="w-[36rem] rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[2.375rem] px-[3.687rem] pb-[3.625rem] gap-[2.875rem] max-w-full mq450:pt-[1.563rem] mq450:pb-[2.375rem] mq450:box-border mq750:gap-[1.438rem] mq750:pl-[1.813rem] mq750:pr-[1.813rem] mq750:box-border">
       <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.812rem] box-border max-w-full text-[2rem] mq450:pl-[1.875rem] mq450:pr-[1.875rem] mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq450:gap-[0.938rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[2.312rem] pr-[2.187rem]">
              <h1 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Verify your email
              </h1>
            </div>
            <div className="self-stretch relative text-[1rem] text-center z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:4px]">{`Enter the 8 digit code you have received on `}</p>
              <p className="m-0 font-medium">swa***@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-center mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="w-10 h-10 m-1 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          VERIFY
        </button>
      </div>
      </div>
  );
}
