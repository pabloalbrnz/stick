import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

export function Error() {
  const [shake, setShake] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div
        className={`h-full flex justify-center transition-all ease-linear duration-500 py-10 ${
          shake ? "bg-red-500" : "bg-amber-300"
        }`}
      >
        <div className="flex w-fit flex-col justify-start gap-40">
          <div className="flex items-start justify-between">
            <button
              className="flex gap-2 items-center px-6 py-2 rounded-lg transition-all ease-linear bg-teal-400 hover:bg-teal-500 border-[1px] border-teal-500 hover:border-teal-600 text-teal-50 hover:text-teal-100 shadow-sm shadow-teal-500 focus:outline-amber-500"
              onClick={() => navigate("/stick")}
            >
              <AiFillHome />
              <span>Home</span>
            </button>
            <div className="flex flex-col items-center justify-center">
              <span
                className={`text-7xl font-bold mt-[-10px] transition-all ease-linear ${
                  shake
                    ? "text-violet-500 -rotate-[4deg] drop-shadow-lg"
                    : "text-fuchsia-500 rotate-[8deg]"
                }`}
              >
                404
              </span>
              <span
                className={`text-6xl font-black mt-[-30px] transition-all ease-linear ${
                  shake
                    ? "text-yellow-500 rotate-2 drop-shadow-lg"
                    : "text-teal-500 -rotate-3"
                }`}
              >
                error
              </span>
            </div>
            <div className="flex gap-2 items-center px-6 py-2 text-transparent select-none">
              <AiFillHome />
              <span>Home</span>
            </div>
          </div>
          <div
            className={`bg-amber-200 px-8 py-6 rounded-xl border-[1px] border-amber-400 shadow-lg cursor-pointer transition-all ease-linear ${
              shake
                ? "animate-errorShake shadow-red-600"
                : "shadow-amber-400 animate-errorPageBounce"
            }`}
          >
            <span
              onClick={() => {
                setShake(true);
                setTimeout(() => {
                  setShake(false);
                }, 1500);
              }}
              className="text-7xl font-bold animate-errorPage"
            >
              You found an error! 🤓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
