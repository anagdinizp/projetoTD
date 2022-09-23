import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export function Card({ name, age, gender, breed, locale, dogImage, color }: dataCard) {
  const coração = <FontAwesomeIcon icon={faHeart} />;
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
        <ButtonIcon color={color}> {coração}</ButtonIcon>
      </CardButton>
    </CardContainer>
  );
}
