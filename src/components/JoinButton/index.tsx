import { ButtonHTMLAttributes, ElementType } from "react";

interface JoinButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: { icon: ElementType; size: number };
  label: string;
}

export function JoinButton({ Icon, label, ...rest }: JoinButtonProps) {
  return (
    <button
      {...rest}
      className="flex px-4 py-2 gap-4 rounded-xl bg-amber-200 shadow-sm shadow-amber-300 justify-center items-center border-[1px] border-amber-300 hover:border-amber-400 hover:bg-amber-300 hover:shadow-amber-400 group/google transition-all ease-linear"
    >
      <Icon.icon
        className="text-amber-600 group-hover/google:text-amber-700 transition-all ease-linear"
        size={Icon.size}
      />
      <span className="text-md text-amber-950 group-hover/google:text-amber-900 transition-all ease-linear">
        {label}
      </span>
    </button>
  );
}
