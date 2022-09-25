import styled from "styled-components";
import { point } from "../Breakpoints";

export const DropdownCardContainer = styled.div`
  visibility: hidden;
  @media only screen and (${point.tablet}) { 
    visibility: visible;
    position: absolute;
    margin-top: 0.6rem;
    margin-left: -4rem;
    botton: 3.5rem;
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

export const ContainerButtonDog = styled.button`
  border-bottom-width: 1px;
  border-bottom-color: #ece7e7;
`;

export const DogInfoContainer = styled.div`
  color: gray;
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: #ece7e7;
  transform: translateX(1px);
  :hover {
    background-color: #f7f4f4;
  }
`;

export const DogMiniIcon = styled.img`
  width: 13rem;
  height: 3rem;
  border-radius: 100%;
  padding: 0.50rem;
`;

export const DogName = styled.span`
  margin-right: 1.50rem;
`;