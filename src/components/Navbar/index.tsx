import { useEffect, useRef, useState } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAvatar, UserAvatarAnchor } from "../Avatar";
import { AnchorNav, IconNav, NavContainer, PagesNav, UlNav } from "./style";
import { DropdownUser } from "../Dropdown";

export function Navbar({ children }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const pata = <FontAwesomeIcon icon={faPaw} />;
  const osso = <FontAwesomeIcon icon={faBone} />;
  const cachorro = <FontAwesomeIcon icon={faDog} />;

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);

    function handleClick(event: any) {
      if (ref && ref.current) {
        const myRef: any = ref.current;
        if (!myRef.contains(event.target)) {
          setOpen(false);
        }
      }
    }
  });

  return (
    <NavContainer>
      <UlNav>
        <li>
            <AnchorNav href={"/inicio"}>
              <IconNav>{cachorro}</IconNav>
              <PagesNav>Início</PagesNav>
            </AnchorNav>
        </li>
        <li>
            <AnchorNav href={"/crushs"}>
              <IconNav>{pata}</IconNav>
              <PagesNav>Meus crushs</PagesNav>
            </AnchorNav>
        </li>
        <li>
            <AnchorNav href={"#"}>
              <IconNav>{osso}</IconNav>
              <PagesNav>Pretendentes</PagesNav>
            </AnchorNav>
        </li>
        <li> 
        {(window.matchMedia("(min-width:768px)").matches) 
        ? <div ref={ref as any} onClick={() => setOpen(!open)}>
        <UserAvatar width={"44rem"} height={"14rem"} image={"https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg"}/>
        {open && <DropdownUser />}
        </div>
        : <UserAvatarAnchor
            image="https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg"
            width={"44rem"}
            height={"14rem"}
          />
        }
        </li>
      </UlNav>
    </NavContainer>
  );
}
