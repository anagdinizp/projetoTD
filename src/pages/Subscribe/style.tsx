import styled from "styled-components";
import { point } from "../../components/Breakpoints";
import dogImage from '../../assets/background-dog-subscriber.png';


export const DogSideSubscribe = styled.div`
  display: none;
  @media ${point.tablet} {
    visibility: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${dogImage});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const WhiteSide = styled.div`
  background-color: white;
  background-size: cover;
  min-height: 100vh;
  margin-top: 5rem;
  @media ${point.tablet} {
    display: block;
    margin-top: 6rem;
}
`;

export const SubscribeForm = styled.div`
  background-color: white;
  margin: auto;
  width: fit-content;
  height: fit-content;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubscribeTittle = styled.strong`
  margin-top: 5rem;
  color: black;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
  display: block;
  text-align: center;
`;

export const FormSubscribeContainer = styled.div`
  margin: auto;
  padding: 1.25rem;
`;

export const FormSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  margin-left: 0.25rem;
`;