interface UsernameProps {
  text: string;
  toggled: boolean;
}

export function Username({ text, toggled }: UsernameProps) {
  return (
    <span className={`${toggled ? "hidden" : ""} font-semibold text-slate-900`}>
      {text}
    </span>
  );
}
