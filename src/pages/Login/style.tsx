import styled from 'styled-components';
import dogImage from '../../assets/background-sorriso-md-blend.jpg';
import { point } from '../../components/Breakpoints';

export const ContainerTwoSides = styled.div`
  display: block;
  @media ${point.tablet} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ContainerLoginForm = styled.div`
  background-color: white;
  width: 22rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DogSideLogin = styled.div`
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

export const FormSide = styled.div`
  background-color: white;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  @media ${point.tablet} {
    justify-content: center;
    align-self: center;
    align-items: center;
  }
`;

export const ContainerSlogan = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SloganTittle = styled.strong`
  margin-bottom: 0.25rem;
  font-weight: 700;
  color: white;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: center;
  text-align: center;
`;

export const SloganSubtittle = styled.span`
  margin-left: 48px;
  margin-right: 48px;
  color: white;
  font-weight: 700;
  justify-content: center;
  text-align: justify;
`;

export const InputTittle = styled.strong`
  color: black;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.25rem;
`;

export const LoginTittle = styled.strong`
  color: black;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  display: block;
`;

export const LoginSpan = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
  margin-top: 1rem;
`;

export const LoginAnchor = styled.a`
  font-weight: 700;
  margin-top: 0.5rem;
  color: #AC8975;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;