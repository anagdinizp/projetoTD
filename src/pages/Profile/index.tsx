import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  DogImage,
  DogImageContainer,
  DogInfoContainer,
  DogProfileContainer,
  EditIcon,
  EditIconAnchor,
  InfoContainer,
  InfoSubtittle,
  InfoTittle,
  OwnerName,
  NameIconContainer,
  OwnerAvatar,
  OwnerAvatarContainer,
  OwnerContainer,
  DogName,
  GalleryContainer,
  DogGallerySlider,
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
            <OwnerName>{owner.name}</OwnerName>
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
          <DogInfoContainer>
            <NameIconContainer>
              <DogName>{dog.name}</DogName>
              <EditIconAnchor href="/pet">
                <EditIcon>{editar}</EditIcon>
              </EditIconAnchor>
            </NameIconContainer>
            <InfoTittle>
              Idade:
              <InfoSubtittle>{dog.age} anos</InfoSubtittle>
            </InfoTittle>
            <InfoTittle>
              Raça:
              <InfoSubtittle>{dog.breed}</InfoSubtittle>
            </InfoTittle>
            <InfoTittle>
              Sexo:
              <InfoSubtittle>{dog.gender}</InfoSubtittle>
            </InfoTittle>
            <InfoTittle>
              Localização:
              <InfoSubtittle>{dog.locale}</InfoSubtittle>
            </InfoTittle>
          </DogInfoContainer>
          <GalleryContainer>
            <DogGallerySlider src={dog.gallery.image01} />
          </GalleryContainer>
        </DogProfileContainer>
      ))}
    </>
  );
}
