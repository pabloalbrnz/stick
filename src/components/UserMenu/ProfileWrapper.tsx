import { ReactNode } from "react";

interface ProfileWrapperProps {
  children: ReactNode;
  toggled: boolean;
}

export function ProfileWrapper({ children, toggled }: ProfileWrapperProps) {
  return (
    <div
      className={`w-full px-2 gap-8 flex items-center group/avatar ${
        toggled ? "justify-center" : "justify-start"
      }`}
    >
      {children}
    </div>
  );
}
