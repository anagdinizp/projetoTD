import styled from 'styled-components';
import { point } from "../Breakpoints";

export const DropdownContainer = styled.div`
  visibility: hidden;
  @media only screen and (${point.tablet}) { 
    visibility: visible;
    position: absolute;
    margin-top: 0.5rem;
    top: 3.5rem;
    width: 9rem;
    overflow: hidden;
    background-color: white;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-width: 1px;
    border-color: #ece7e7;
  }
`;

export const PerfilAnchor = styled.a`
  color: gray;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: #ece7e7;
  transform: translateX(1px);
  :hover {
    background-color: #f7f4f4;
  }
`;

export const PerfilIcon = styled.div`
  margin: 0;
`;

export const PerfilDropdown = styled.span`
  margin-left: 2rem;
`;

export const LogoOutAnchor = styled.a`
  color: gray;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transform: translateX(1px);
  border-radius: 0.25rem;
  :hover {
    background-color: #f7f4f4;
  }
`;

export const LogoutDropdown = styled.span`
  margin-left: 2rem;
`;