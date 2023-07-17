import { ButtonHTMLAttributes, ElementType } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon: { icon: ElementType; size: number };
  variant: "primary" | "dangerous" | "disabled";
  toggled: boolean;
}

export function NavButton({
  text,
  variant,
  Icon,
  toggled,
  ...rest
}: NavButtonProps) {
  return (
    <button
      disabled={variant == "disabled" ? true : false}
      {...rest}
      className={`${
        !toggled
          ? "grid grid-cols-[0_minmax(0,1fr)] w-[85%] px-3 py-1.5 "
          : "p-[.625rem]"
      }
      ${
        variant == "primary"
          ? "items-center transition-all ease-linear rounded-lg bg-amber-50 hover:bg-amber-100 font-medium text-amber-500 hover:text-amber-600 focus:outline-amber-500 shadow-sm shadow-amber-300 border-[1px] box-border border-amber-200 hover:border-amber-300"
          : variant == "dangerous"
          ? "items-center transition-all ease-linear rounded-lg bg-red-500 hover:bg-red-600 font-medium text-white hover:text-red-50 focus:outline-red-700 shadow-sm shadow-amber-300 border-[1px] box-border border-red-600 hover:border-red-700"
          : "items-center transition-all ease-linear rounded-lg bg-neutral-100 font-medium text-neutral-400 hover:cursor-not-allowed outline-none"
      }`}
    >
      <Icon.icon size={toggled ? 28 : Icon.size} />
      {!toggled ? <span className="text-sm">{text}</span> : <></>}
    </button>
  );
}
