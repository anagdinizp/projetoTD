import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { DropdownCard } from "../Dropdown Card";
import {
  ButtonIcon,
  CardButton,
  CardContainer,
  DogImageContainer,
  DogName,
  InfoContainer,
  InfoSubtittle,
  InfoTittle,
} from "./style";
export type genderType = "Macho" | "Fêmea";
export type colorType = "black" | "red";

export interface dataCard {
  name: string;
  age: number;
  gender: string;
  breed: string;
  locale: string;
  dogImage: string;
  color: colorType;
}

export function Card({
  name,
  age,
  gender,
  breed,
  locale,
  dogImage,
  color,
}: dataCard) {
  const coração = <FontAwesomeIcon icon={faHeart} />;
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);

    function handleClick(event: any) {
      if (ref && ref.current) {
        const myRef: any = ref.current;
        if (!myRef.contains(event.target)) {
          setOpen(false);
        }
      }
    }
  });
  return (
    <CardContainer>
      <DogImageContainer>
        <img src={dogImage} />
      </DogImageContainer>
      <InfoContainer>
        <DogName>{name}</DogName>
        <InfoTittle>
          Idade:
          <InfoSubtittle> {age}</InfoSubtittle>
        </InfoTittle>
        <InfoTittle>
          Raça:
          <InfoSubtittle> {breed}</InfoSubtittle>
        </InfoTittle>
        <InfoTittle>
          Sexo:
          <InfoSubtittle> {gender}</InfoSubtittle>
        </InfoTittle>
        <InfoTittle>
          Localização:
          <InfoSubtittle> {locale}</InfoSubtittle>
        </InfoTittle>
      </InfoContainer>
      <CardButton>
        <ButtonIcon
          ref={ref as any}
          onClick={() => setOpen(!open)}
          color={color}
        >
          {coração}
          {open && <DropdownCard />}
        </ButtonIcon>
      </CardButton>
    </CardContainer>
  );
}
