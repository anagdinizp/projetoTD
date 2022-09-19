import styled, { css } from "styled-components";
import { buttonType } from ".";

export interface StyledButtonProps {
  buttonStyle: buttonType;
}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 1rem;
  ${({ buttonStyle }: StyledButtonProps) => getButtonType(buttonStyle)}
  :hover {
    background-color: #DDB096;
  }
`;

const getButtonType = (buttonStyle: buttonType) => {
  switch (buttonStyle) {
    case "primary": {
      return css`
        background-color: #ac8975;
        color: white;
        width: 100%;
        height: 60px;
      `;
    }
  }
};
