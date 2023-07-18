import { BiSolidUserCircle, BiSolidLogOut, BiSolidLogIn } from "react-icons/bi";
import { PiGearSixFill } from "react-icons/pi";
import { RiQuestionFill } from "react-icons/ri";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";

import { UserMenu } from "../../components/UserMenu";
import { Calendar } from "../../components/Calendar";
import { useState } from "react";
import { handleUser } from "../handleUser";

import { useNavigate } from "react-router-dom";

interface HomeProps {}

export function Home({}: HomeProps) {
  const { actions, states } = handleUser();
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <UserMenu.Wrapper toggled={isMenuToggled}>
        <div
          className={`flex px-4 ${isMenuToggled ? "self-center" : "self-end"}`}
        >
          {isMenuToggled ? (
            <UserMenu.TopButton
              variant="primary"
              Icon={{ icon: TbArrowBarRight, size: 16 }}
              onClick={() => setIsMenuToggled(false)}
            />
          ) : (
            <UserMenu.TopButton
              variant="primary"
              Icon={{ icon: TbArrowBarLeft, size: 16 }}
              onClick={() => setIsMenuToggled(true)}
            />
          )}
        </div>
        <UserMenu.Profile toggled={isMenuToggled}>
          <UserMenu.Avatar
            toggled={isMenuToggled}
            logged={states.isLogged}
            image={
              states.user.photoURL || "https://loremflickr.com/1000/1000/cat"
            }
          />
          <UserMenu.Username
            text={
              states.user.displayName
                ? states.user.displayName.split(" ")[0]
                : "Guest"
            }
            toggled={isMenuToggled}
          />
        </UserMenu.Profile>
        <div className="flex flex-col gap-2 w-full items-center">
          <UserMenu.NavButton
            variant="primary"
            text="Profile"
            Icon={{ icon: BiSolidUserCircle, size: 24 }}
            toggled={isMenuToggled}
            onClick={() => navigate("/sticks/profile")}
          />
          <UserMenu.NavButton
            variant="disabled"
            text="Help"
            Icon={{ icon: RiQuestionFill, size: 24 }}
            toggled={isMenuToggled}
            onClick={() => navigate("/sticks/help")}
            disabled={true}
          />
          <UserMenu.NavButton
            variant="primary"
            text="Settings"
            Icon={{ icon: PiGearSixFill, size: 24 }}
            toggled={isMenuToggled}
            onClick={() => navigate("/sticks/settings")}
          />
          <div className="p-2 w-full h-fit flex justify-center">
            <div className="bg-amber-300 h-[2px] w-[50%] rounded" />
          </div>
          {states.isLogged ? (
            <UserMenu.NavButton
              variant="dangerous"
              text="Log Out"
              Icon={{ icon: BiSolidLogOut, size: 24 }}
              toggled={isMenuToggled}
              onClick={actions.handleSignOut}
            />
          ) : (
            <UserMenu.NavButton
              variant="primary"
              text="Log In"
              Icon={{ icon: BiSolidLogIn, size: 24 }}
              toggled={isMenuToggled}
              onClick={actions.handleGoogleSignIn}
            />
          )}
        </div>
      </UserMenu.Wrapper>
      <Calendar.Wrapper>
        <></>
      </Calendar.Wrapper>
    </div>
  );
}
