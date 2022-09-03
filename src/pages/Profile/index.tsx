import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  DogImage,
  DogImageContainer,
  DogProfileContainer,
  EditIcon,
  EditIconAnchor,
  InfoContainer,
  InfoSubtittle,
  InfoTittle,
  Name,
  NameIconContainer,
  OwnerAvatar,
  OwnerAvatarContainer,
  OwnerContainer,
} from "./style";
type genderType = "Macho" | "Fêmea";

interface profileData {
  dogAvatar: string;
  dogName: string;
  dogAge: number;
  dogBreed: string;
  dogGender: genderType;
  locale: string;
  dogImages: string;
  ownerAvatar: string;
  ownerName: string;
  ownerAge: number;
  ownerCareer: string;
  telefone: number;
  message: string;
}

const dogs = [
  {
    id: 1,
    name: "Simba",
    age: 4,
    breed: "Dachshund",
    gender: "Macho",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: {
      image01:
        "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 2,
    name: "Bisteca",
    age: 2,
    breed: "Dachshund",
    gender: "Macho",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: {
      image01:
        "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];

const owner = {
  id: 3,
  avatar:
    "https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg",
  name: "Ana",
  age: 23,
  career: "Estudante",
  locale: "Campina Grande, PB",
  telefone: 83987350316,
};

export function Profile() {
  const editar = <FontAwesomeIcon icon={faUserEdit} />;
  return (
    <>
      <OwnerContainer>
        <OwnerAvatarContainer>
          <OwnerAvatar src={owner.avatar} />
        </OwnerAvatarContainer>
        <InfoContainer>
          <NameIconContainer>
            <Name>{owner.name}</Name>
            <EditIconAnchor href="/editar">
              <EditIcon>{editar}</EditIcon>
            </EditIconAnchor>
          </NameIconContainer>
          <InfoTittle>
            Idade:
            <InfoSubtittle>{owner.age} anos</InfoSubtittle>
          </InfoTittle>
          <InfoTittle>
            Profissão:
            <InfoSubtittle>{owner.career}</InfoSubtittle>
          </InfoTittle>
          <InfoTittle>
            Localização:
            <InfoSubtittle>{owner.locale}</InfoSubtittle>
          </InfoTittle>
          <InfoTittle>
            Contato:
            <InfoSubtittle>{owner.telefone}</InfoSubtittle>
          </InfoTittle>
        </InfoContainer>
      </OwnerContainer>
      {dogs.map((dog) => (
        <DogProfileContainer>
          <DogImageContainer>
            <DogImage src={dog.dogAvatar} />
          </DogImageContainer>
          <div className="block text-black font-extralight p-10 md:p-20 md:-ml-16">
            <div className="flex justify-between">
              <strong className="block font-bold text-2xl text-start mr-1 md:text-4xl md:mr-8">
                {dog.name}
              </strong>
              <a href="/pet" className="justify-items-center">
                <span className="inline-block align-middle text-2xl">
                  {editar}
                </span>
              </a>
            </div>
            <strong className="block font-bold text-lg mt-4 text-start md:mt-10">
              Idade:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.age} anos
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Raça:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.breed}
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Sexo:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.gender}
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Localização:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.locale}
              </span>
            </strong>
          </div>
          <div className="flex justify-between mb-3 mt-3">
            <img
              className="w-[400px] h-[400px] mx-2"
              src={dog.gallery.image01}
            />
          </div>
        </DogProfileContainer>
      ))}
    </>
  );
}
