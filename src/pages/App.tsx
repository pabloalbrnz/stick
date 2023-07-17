import { BiSolidUserCircle, BiSolidLogOut, BiSolidLogIn } from "react-icons/bi";
import { PiGearSixFill } from "react-icons/pi";
import { RiQuestionFill } from "react-icons/ri";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";

import { UserMenu } from "../components/UserMenu";
import { Calendar } from "../components/Calendar";
import { useState } from "react";

export function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <div className="w-full h-screen">
      <UserMenu.Wrapper toggled={isMenuToggled}>
        <div className="w-full px-4 flex flex-col gap-4 items-center">
          <div className={`flex ${isMenuToggled ? "self-center" : "self-end"}`}>
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
          <UserMenu.Profile>
            <UserMenu.Avatar toggled={isMenuToggled} />
            <UserMenu.Username text="pulse" toggled={isMenuToggled} />
          </UserMenu.Profile>
        </div>
        <div className="flex flex-col gap-2 w-full items-center">
          <UserMenu.NavButton
            variant="primary"
            text="Profile"
            Icon={{ icon: BiSolidUserCircle, size: 24 }}
            toggled={isMenuToggled}
          />
          <UserMenu.NavButton
            variant="disabled"
            text="Help"
            Icon={{ icon: RiQuestionFill, size: 24 }}
            toggled={isMenuToggled}
          />
          <UserMenu.NavButton
            variant="primary"
            text="Settings"
            Icon={{ icon: PiGearSixFill, size: 24 }}
            toggled={isMenuToggled}
          />
          <div className="p-2 w-full h-fit flex justify-center">
            <div className="bg-amber-300 h-[2px] w-[50%] rounded" />
          </div>
          {isLogged ? (
            <UserMenu.NavButton
              variant="primary"
              text="Log In"
              Icon={{ icon: BiSolidLogIn, size: 24 }}
              toggled={isMenuToggled}
              onClick={() => setIsLogged(false)}
            />
          ) : (
            <UserMenu.NavButton
              variant="dangerous"
              text="Log Out"
              Icon={{ icon: BiSolidLogOut, size: 24 }}
              toggled={isMenuToggled}
              onClick={() => setIsLogged(true)}
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
