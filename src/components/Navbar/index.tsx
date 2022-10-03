import { useEffect, useRef, useState } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAvatar, UserAvatarAnchor } from "../Avatar";
import { AnchorNav, IconNav, Item, NavContainer, PagesNav, UlNav } from "./style";
import { DropdownUser } from "../Dropdown Navbar";

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
        <Item>
            <AnchorNav href={"/inicio"}>
              <IconNav>{cachorro}</IconNav>
              <PagesNav>Início</PagesNav>
            </AnchorNav>
        </Item>
        <Item>
            <AnchorNav href={"/crushs"}>
              <IconNav>{pata}</IconNav>
              <PagesNav>Meus crushs</PagesNav>
            </AnchorNav>
        </Item>
        <Item>
            <AnchorNav href={"#"}>
              <IconNav>{osso}</IconNav>
              <PagesNav>Pretendentes</PagesNav>
            </AnchorNav>
        </Item>
        <li> 
        {(window.matchMedia("(min-width:768px)").matches) 
        ? <div ref={ref as any} onClick={() => setOpen(!open)}>
        <UserAvatar width={"44rem"} height={"14rem"} image={"https://avatars.githubusercontent.com/u/79330582?v=4"}/>
        {open && <DropdownUser />}
        </div>
        : <UserAvatarAnchor
            image="https://avatars.githubusercontent.com/u/79330582?v=4"
            width={"44rem"}
            height={"14rem"}
          />
        }
        </li>
      </UlNav>
    </NavContainer>
  );
}