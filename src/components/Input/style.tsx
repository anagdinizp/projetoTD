import styled, { css } from "styled-components";
import { InputType, InputProps } from ".";
import { point } from "../Breakpoints";

export const StyledInput = styled.input`
  padding: 1.25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 500px;
  @media only screen and (${point.tablet}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  ${({ inputStyle }: InputProps) => getInputType(inputStyle)}
  ${({ password }: InputProps) =>
    password
      ? css`
          border-bottom-right-radius: 0rem;
          border-top-right-radius: 0rem;
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        `
      : css`
          border-radius: 0.5rem;
        `}
`;

export const InputPasswordContainer = styled.div`
  display: flex;
`;

export const ContainerEye = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: lightgray;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  height: 2, 5rem;
  outline: none;
`;

export const PasswordEye = styled.i`
  display: contents;
  width: 100%;
  color: #ac8975;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const getInputType = (inputStyle: InputType) => {
  switch (inputStyle) {
    case "primary": {
      return css`
        background-color: lightgray;
        color: darkgray;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      `;
    }
  }
};
