import * as Avatar from "@radix-ui/react-avatar";

interface MenuAvatarProps {
  toggled: boolean;
  logged: boolean;
  image: string;
}

export function MenuAvatar({ image, logged, toggled }: MenuAvatarProps) {
  return (
    <Avatar.Root
      className={`bg-slate-600 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle border-amber-600 shadow-md shadow-amber-400 h-12 w-12 ${
        toggled ? "border-[2px]" : "border-[3px]"
      }`}
    >
      {logged ? (
        <>
          <Avatar.Image
            src={image}
            alt="userAvatar"
            className="transition-all ease-linear hover:brightness-[50%]"
          />
          <Avatar.Fallback className="text-amber-600 leading-1 flex h-full w-full items-center justify-center bg-slate-200 text-2xl font-bold">
            PL
          </Avatar.Fallback>
        </>
      ) : (
        <span
          className={`text-amber-600 flex h-full w-full items-center justify-center bg-slate-200 font-bold ${
            toggled ? "text-2xl" : "text-2xl"
          }`}
        >
          ?
        </span>
      )}
    </Avatar.Root>
  );
}
