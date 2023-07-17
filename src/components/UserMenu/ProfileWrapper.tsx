import { ReactNode } from "react";

interface ProfileWrapperProps {
  children: ReactNode;
  toggled: boolean;
}

export function ProfileWrapper({ children, toggled }: ProfileWrapperProps) {
  return (
    <div
      className={`px-1 gap-4 flex items-center group/avatar ${
        toggled ? "justify-center" : "justify-start"
      }`}
    >
      {children}
    </div>
  );
}
