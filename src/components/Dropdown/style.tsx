import styled from 'styled-components';
import { point } from "../../components/Breakpoints";

export const DropdownContainer = styled.div`
  visibility: hidden;
  @media ${point.tablet} {
    visibility: visible;
    position: absolute;
    margin-top: 0.5rem;
    top: 3.5rem;
    width: 9rem;
    pad: 0.25rem;
    overflow: hidden;
    background-color: white;
    border-radius: 0.25rem;
  }
`;

export const PerfilAnchorContainer = styled.div`
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

export const PerfilAnchor = styled.a`
  color: gray;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  :hover {
    background-color: lightgray;
  }
`;

export const PerfilIcon = styled.img`
  margin: 0;
`;

export const PerfilDropdown = styled.span`
  margin-left: 1.5rem;
`;

export const LogoOutAnchor = styled.a`
  color: gray;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  pad: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 0.25rem;
  :hover {
    background-color: lightgray;
  }
`;

export const LogoutDropdown = styled.span`
  margin-left: 3rem;
`;