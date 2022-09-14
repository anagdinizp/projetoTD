import styled from "styled-components";
import { point } from "../../components/Breakpoints";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: space-around;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

export const UlNav = styled.ul`
  gap: 3.5rem;
  color: black;
  display: contents;
  @media only screen and (${point.tablet}) { 
    gap: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AnchorNav = styled.a`
  margin: auto;
  vertical-align: middle;
  justify-content: center;
`;

export const IconNav = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const PagesNav = styled.span`
  display: none;
  @media only screen and (${point.tablet}) { 
    display: inline-block;
    text-align: center;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 200;
  }
`;