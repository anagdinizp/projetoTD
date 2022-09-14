import styled from 'styled-components';
import { point } from "../../components/Breakpoints";

export const FooterContainer = styled.footer`
  display: flex;
  flex-shrink: 0;
  padding: 0.25rem;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media only screen and (${point.tablet}) { 
    position: relative;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    border-width: 1px;
    border-top-color: lightgray;
  }
`;