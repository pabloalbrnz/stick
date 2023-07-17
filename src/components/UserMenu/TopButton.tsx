import { ButtonHTMLAttributes, ElementType } from "react";

interface TopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: { icon: ElementType; size: number };
  variant: "primary" | "dangerous" | "disabled";
}

export function TopButton({ Icon, variant, ...rest }: TopButtonProps) {
  return (
    <button
      disabled={variant == "disabled" ? true : false}
      className={
        variant == "primary"
          ? "p-2 transition-all ease-linear rounded-lg bg-amber-50 hover:bg-amber-100 font-medium text-amber-500 hover:text-amber-600 focus:outline-amber-500 shadow-sm shadow-amber-300 border-[1px] box-border border-amber-200 hover:border-amber-300"
          : variant == "dangerous"
          ? ""
          : ""
      }
      {...rest}
    >
      <Icon.icon size={Icon.size} />
    </button>
  );
}
