import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type themeType = "light" | "dark";
type sizeType = "s" | "m" | "l";
type inputType = "email" | "text" | "number";
type styleInput = "dark" | "light";
type eyeInput = "dark" | "light";

interface propsInput {
  styleType: {
    theme: themeType;
    size: sizeType;
  };
  type: inputType;
  placeholder: string;
  value: string;
  setState: (value: string) => void;
}

interface inputPassword {
  setState: (value: string) => void;
  type: string;
  value: string;
  style: styleInput;
  eyeInput: eyeInput;
}

const getTheme = (theme: themeType) => {
  switch (theme) {
    case "light":
      return "bg-gray-100 outline-none rounded-lg text-base md:text-xl";
    case "dark":
      return "text-white-100 bg-gray-900 outline-none rounded-lg text-base md:text-xl";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "px-5 h-10";
    case "m":
      return "px-10 h-28";
    case "l":
      return "px-20 h-40";
  }
};

const getStyle = (style: styleInput) => {
  switch (style) {
    case "light":
      return "bg-gray-100 w-full p-5 h-8 rounded-l-lg outline-none text-base md:text-xl";
    case "dark":
      return "text-white-100 bg-gray-900 w-full p-5 h-8 rounded-l-lg outline-none text-base md:text-xl";
  }
};

const getEyeStyle = (eyeInput: eyeInput) => {
  switch (eyeInput) {
    case "light":
      return "flex items-center justify-center rounded-r-lg bg-gray-100 w-fit p-5 h-8 outline-none";
    case "dark":
      return "flex items-center justify-center rounded-r-lg bg-gray-900 w-fit p-5 h-8 outline-none";
  }
};

export function Input({
  styleType,
  placeholder,
  value,
  type,
  setState,
}: propsInput) {
  return (
    <input
      className={`${getTheme(styleType.theme)} ${getSize(styleType.size)}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => setState(event.target.value)}
    />
  );
}

export function InputPassword({
  value,
  setState,
  type,
  style,
  eyeInput,
}: inputPassword) {
  const [passwordShown, setPasswordShown] = useState(false);
  function passwordVisibility() {
    setPasswordShown(!passwordShown);
  }
  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="flex">
      <input
        className={`${getStyle(style)}`}
        type={passwordShown ? "text" : "password"}
        placeholder={"Digite sua senha"}
        value={value}
        onChange={(event) => setState(event.target.value)}
      />
      <div className={`${getEyeStyle(eyeInput)}`}>
        <i
          className="md:w-full text-white-900 hover:text-black transition-colors cursor-pointer"
          onClick={passwordVisibility}
        >
          {eye}
        </i>
      </div>
    </div>
  );
}
