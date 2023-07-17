import { AiOutlineGoogle } from "react-icons/ai";
import { BiSolidLogIn } from "react-icons/bi";
import { JoinButton } from "../../components/JoinButton";

import { handleUser } from "../handleUser";

export function SignIn() {
  const { actions } = handleUser();

  return (
    <div className="w-full h-screen bg-amber-50 flex justify-center py-20">
      <div className="flex flex-col items-center h-[50%] justify-between">
        <h1 className="flex text-center gap-4 font-bold text-2xl text-orange-600">
          <BiSolidLogIn size={32} />
          <span>Log in to continue!</span>
        </h1>
        <JoinButton
          Icon={{ icon: AiOutlineGoogle, size: 24 }}
          label="Join with Google"
          onClick={actions.handleGoogleSignIn}
        />
      </div>
    </div>
  );
}
