import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({}: WrapperProps) {
  return <div className=""></div>;
}
