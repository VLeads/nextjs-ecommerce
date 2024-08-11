import Link from "next/link";
import { FC } from "react";


export type HeaderType = {
    className?: string;
};

const Header: FC<HeaderType> = ({
    className = "",
}) => {
    return (
        <header
            className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.437rem] box-border gap-[1rem] shrink-0 max-w-full text-left text-[0.75rem] font-inter ${className}`}
        >
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                <div className="self-stretch bg-neutral-white flex flex-row items-start justify-end pt-[0.75rem] px-[2.5rem] pb-[0.687rem] box-border gap-[1.25rem] max-w-full mq450:flex-wrap">
                    <div className="h-[2.25rem] w-[90rem] relative bg-neutral-white hidden max-w-full" />
                    <div
                        className={`h-[0.813rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border z-[1] text-left text-[0.75rem] text-neutral-500 font-inter ${className}`}
                    >
                        <Link href='#' className="[text-decoration:none] relative text-[inherit] inline-block min-w-[1.688rem]">
                            Help
                        </Link>
                    </div>
                    <div
                        className={`h-[0.813rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border z-[1] text-left text-[0.75rem] text-neutral-500 font-inter ${className}`}
                    >
                        <Link href='#' className="[text-decoration:none] relative text-[inherit] inline-block min-w-[6.063rem]">{`Orders & Returns`}</Link>
                    </div>
                    <div
                        className={`h-[0.813rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border z-[1] text-right text-[0.75rem] text-neutral-500 font-inter ${className}`}
                    >
                        <span className="ml-[-0.063rem] [text-decoration:none] relative text-[inherit] inline-block min-w-[2.938rem] shrink-0 whitespace-nowrap">
                            Hi, John
                        </span>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.5rem] box-border max-w-full text-[2rem] text-neutral-black">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
                        <Link href='#'
                            className="[text-decoration:none] relative font-bold text-[inherit] mq450:text-[1.188rem] mq1050:text-[1.625rem]"
                        >
                            ECOMMERCE
                        </Link>
                        <nav className="m-0 w-[35.25rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border max-w-full">
                            <nav className="m-0 w-[29.875rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full whitespace-nowrap text-left text-[1rem] text-neutral-black font-inter mq750:flex-wrap">
                                <Link href='#' className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.375rem]">
                                    Categories
                                </Link>
                                <Link href='#' className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[2.125rem]">
                                    Sale
                                </Link>
                                <Link href='#' className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem]">
                                    Clearance
                                </Link>
                                <Link href='#' className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.125rem]">
                                    New stock
                                </Link>
                                <Link href='#' className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.313rem]">
                                    Trending
                                </Link>
                            </nav>
                        </nav>
                        <div className="w-[6rem] flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border text-[0.625rem] text-neutral-white">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                                <img
                                    className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
                                    loading="lazy"
                                    alt=""
                                    src="/svg/search.svg"
                                />
                                <div
                                    className={`h-[2rem] w-[2rem] relative text-left text-[0.625rem] text-neutral-white font-inter ${className}`}
                                >
                                    <div className="absolute h-[60.94%] w-[68.13%] top-[19.69%] right-[16.25%] bottom-[19.38%] left-[15.63%]">
                                        <img
                                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                            loading="lazy"
                                            alt=""
                                            src="/svg/cart.svg"
                                        />
                                        <div className="absolute top-[-0.644rem] left-[0.563rem] w-[1.25rem] h-[1.25rem] hidden">
                                            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-neutral-500 w-full h-full" />
                                            <div className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_6px)] uppercase font-medium">
                                                99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row items-start justify-center pt-[0.625rem] px-[1.25rem] pb-[0.5rem] box-border gap-[1.125rem] max-w-full text-[0.875rem] text-neutral-black mq450:flex-wrap">
                <div className="h-[2.25rem] w-[90rem] relative bg-neutral-100 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.375rem]">
                    <img
                        className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/svg/less-than.svg"
                    />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-medium z-[1]">
                        Get 10% off on business sign up
                    </div>
                </div>
                <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 object-contain z-[1]"
                    alt=""
                    src="/svg/greater-than.svg"
                />
            </div>
        </header>
    );
};

export default Header;
