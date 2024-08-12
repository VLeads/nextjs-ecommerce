
export default function CustomLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div
                className={`w-[36rem] rounded-xl bg-neutral-white border-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[2.375rem] px-[3.687rem] pb-[6rem] gap-[2rem] shrink-0 max-w-full text-left text-[2rem] text-neutral-black font-inter mq750:gap-[1rem] mq750:pt-[1.563rem] mq750:px-[1.813rem] mq750:pb-[5.188rem] mq750:box-border h-full m-6`}
            >
                {children}
            </div>
        </div>
    );
}