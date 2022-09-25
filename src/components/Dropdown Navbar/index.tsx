import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownContainer,
  LogoOutAnchor,
  LogoutDropdown,
  PerfilAnchor,
  PerfilDropdown,
  PerfilIcon,
} from "./style";

export function DropdownUser() {
  const user = <FontAwesomeIcon icon={faCircleUser} />;
  const sair = <FontAwesomeIcon icon={faArrowRightFromBracket} />;

  return (
    <DropdownContainer>
        <PerfilAnchor href="/perfil">
          <PerfilIcon>{user}</PerfilIcon>
          <PerfilDropdown>Perfil</PerfilDropdown>
        </PerfilAnchor>
      <LogoOutAnchor href="/">
        <PerfilIcon>{sair}</PerfilIcon>
        <LogoutDropdown>Sair</LogoutDropdown>
      </LogoOutAnchor>
    </DropdownContainer>
  );
}
