import { useEffect, useRef, useState } from "react";
import { UserAvatarAnchor } from "./Avatar";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="flex items-center h-16 justify-around bg-white border-b border-b-gray-200">
      <ul className="gap-14 md:gap-20 flex justify-center items-center text-black">
        <li>
          <div>
            <a className="m-auto align-middle justify-center" href={"/inicio"}>
              <span className="inline-block align-middle text-2xl">{cachorro}</span>
              <span className="hidden md:inline-block text-center p-2 text-lg font-extralight">Início</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="m-auto align-middle justify-center" href={"#"}>
              <span className="inline-block align-middle text-2xl">{pata}</span>
              <span className="hidden md:inline-block text-center p-2 text-lg font-extralight">Meus crushs</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="m-auto align-middle justify-center" href={"#"}>
              <span className="inline-block align-middl text-2xl">{osso}</span>
              <span className="hidden md:inline-block text-center p-2 text-lg font-extralight">Pretendentes</span>
            </a>
          </div>
        </li>
        <li>
          <UserAvatarAnchor
            image="https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg"
            width={"44rem"}
            height={"14rem"}
          />
        </li>
      </ul>
    </div>
  );
}
