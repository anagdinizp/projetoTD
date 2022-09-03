import {
  DropdownContainer,
  LogoOutAnchor,
  LogoutDropdown,
  PerfilAnchor,
  PerfilAnchorContainer,
  PerfilDropdown,
  PerfilIcon,
} from "./style";

export function DropdownUser() {
  return (
    <DropdownContainer>
      <PerfilAnchorContainer>
        <PerfilAnchor href="/perfil">
          <PerfilIcon src="https://img.icons8.com/external-anggara-detail-outline-anggara-putra/20/000000/external-user-contact-us-anggara-detail-outline-anggara-putra.png" />
          <PerfilDropdown>Perfil</PerfilDropdown>
        </PerfilAnchor>
      </PerfilAnchorContainer>
      <LogoOutAnchor href="#">
        <LogoutDropdown>Sair</LogoutDropdown>
      </LogoOutAnchor>
    </DropdownContainer>
  );
}
