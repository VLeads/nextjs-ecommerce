"use client"
import type { NextPage } from "next";
import { withAuth } from "~/utils/withAuth";
import Pagination from 'rc-pagination';

export type InterestsType = {
  className?: string;
};

const Interests: NextPage<InterestsType> = ({ className = "" }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">

    <div
      className={`m-0 w-[36rem] rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-center pt-[2.5rem] px-[3.687rem] pb-[3.125rem] gap-[1.812rem] max-w-full mq750:pt-[1.625rem] mq750:px-[1.813rem] mq750:pb-[2rem] mq750:box-border`}
    >
      
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.125rem] pr-[0rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
            <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Please mark your interests!
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left text-[1rem]">
              <div className="relative leading-[1.625rem]">
                We will keep you notified.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.687rem] text-left text-[1.25rem]">
          <div className="relative leading-[1.625rem] font-medium mq450:text-[1rem] mq450:leading-[1.313rem]">
            My saved interests!
          </div>
          <div className="w-[9.75rem] flex flex-row items-start justify-start gap-[0.75rem] text-[1rem]">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[1.562rem]">
                <input
                  className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                  type="checkbox"
                />
                <input
                  className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                  type="checkbox"
                />
                <div className="flex flex-col items-start justify-start gap-[1.875rem]">
                  <input
                    className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                    type="checkbox"
                  />
                  <div className="flex flex-col items-start justify-start gap-[1.562rem]">
                    <input
                      className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                      type="checkbox"
                    />
                    <input
                      className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                      type="checkbox"
                    />
                    <input
                      className="m-0 w-[1.5rem] h-[1.5rem] relative rounded"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.437rem]">
              <div className="relative leading-[1.625rem] inline-block min-w-[3rem]">
                Shoes
              </div>
              <div className="relative leading-[1.625rem] inline-block min-w-[6rem]">
                Men T-shirts
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem]">
                <div className="relative leading-[1.625rem] inline-block min-w-[3.813rem]">
                  Makeup
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem]">
                  <a className="[text-decoration:none] relative leading-[1.625rem] text-[inherit] inline-block min-w-[4.563rem]">
                    Jewellery
                  </a>
                  <div className="relative leading-[1.625rem] inline-block min-w-[7.5rem]">
                    Women T-shirts
                  </div>
                  <a className="[text-decoration:none] relative leading-[1.625rem] text-[inherit] inline-block min-w-[4.25rem]">
                    Furniture
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="relative text-[1.25rem] leading-[3.25rem] font-medium text-left text-darkgray mq450:text-[1rem] mq450:leading-[1.313rem]">
        <span className="whitespace-pre-wrap">{`<<  <  1  2  3  `}</span>
        <span className="text-neutral-black">4</span>
        <span className="whitespace-pre-wrap">{`  5  6  7 ... >   >>`}</span>
      </div>
      </div>
    </div>
  );
};

export default withAuth(Interests);
