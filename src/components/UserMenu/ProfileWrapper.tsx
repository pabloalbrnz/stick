import { ReactNode } from "react";

interface ProfileWrapperProps {
  children: ReactNode;
}

export function ProfileWrapper({ children }: ProfileWrapperProps) {
  return (
    <div className="flex flex-col gap-2 items-center justif-center group/avatar">
      {children}
    </div>
  );
}
