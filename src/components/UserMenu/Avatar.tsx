import * as Avatar from "@radix-ui/react-avatar";

interface MenuAvatarProps {
  toggled: boolean;
}

export function MenuAvatar({ toggled }: MenuAvatarProps) {
  return (
    <Avatar.Root
      className={`bg-slate-600 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle border-amber-600 shadow-md shadow-amber-400 ${
        toggled ? "h-8 w-8 border-[2px]" : "h-16 w-16 border-[3px]"
      }`}
    >
      <Avatar.Image
        src="https://loremflickr.com/1000/1000/cat"
        alt="userAvatar"
        className="transition-all ease-linear group-hover/avatar:brightness-[50%]"
      />
      <Avatar.Fallback className="text-amber-700 leading-1 flex h-full w-full items-center justify-center bg-slate-200 text-xl font-bold">
        US
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
