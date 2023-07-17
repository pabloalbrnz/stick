import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  toggled: boolean;
}

export function Wrapper({ toggled, children }: WrapperProps) {
  return (
    <div
      className={`bg-yellow-200 flex flex-col items-center py-2 px-0 h-full gap-8 transition-all duration-300 ease-linear ${
        toggled ? "w-[7%]" : "w-[15%]"
      }`}
    >
      {children}
    </div>
  );
}
