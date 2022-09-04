import { ButtonContainer, StyledButton } from "./style";

export type buttonType = 'primary' | 'secondary'

export interface buttonProps {
  children: string;
  buttonStyle: buttonType;
}

export function Button({ buttonStyle, children }: buttonProps) {
  return (
    <ButtonContainer>
      <StyledButton buttonStyle={buttonStyle}>{children}</StyledButton>
    </ButtonContainer>
  );
}
