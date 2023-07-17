import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  toggled: boolean;
}

export function Wrapper({ toggled, children }: WrapperProps) {
  return (
    <div
      className={`bg-yellow-200 flex flex-col items-center py-2 px-0 ${
        toggled ? "w-[7%] h-full gap-4" : "w-[20%] h-full gap-10"
      }`}
    >
      {children}
    </div>
  );
}
