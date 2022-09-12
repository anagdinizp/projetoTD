import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerEye,
  InputPasswordContainer,
  PasswordEye,
  StyledInput,
} from "./style";
import { InputTitle } from "../../pages/Login/style";

export type InputType = "primary" | "secondary";

export interface InputProps {
  title: string;
  value: string;
  placeholder?: string;
  password?: boolean;
  setState: (value: string) => void;
  inputStyle: InputType;
  onChange?: (value:string) => void;
}

export function Input({
  title,
  inputStyle,
  value,
  setState,
  placeholder,
  password,
}: InputProps){
  const [passwordShow, setPasswordShow] = useState(false);
  function passwordVisibility() {
    setPasswordShow(!passwordShow);
  }
  return (
    <>
      <InputTitle>{title}</InputTitle>
      {password ? (
        <InputPasswordContainer>
          <StyledInput
            inputStyle={inputStyle}
            placeholder={placeholder}
            value={value}
            onChange={(event: any) => setState(event.target.value)}
            type={passwordShow ? "text" : "password"}
            password
          />
          <ContainerEye>
            <PasswordEye onClick={passwordVisibility}>
              <FontAwesomeIcon icon={faEye} />
            </PasswordEye>
          </ContainerEye>
        </InputPasswordContainer>
      ) : (
        <StyledInput
          inputStyle={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={(event: any) => setState(event.target.value)}
        />
      )}
    </>
  );
}
