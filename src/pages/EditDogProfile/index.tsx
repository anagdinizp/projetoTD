import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "../../components/Toast";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import {
  ButtonAddImage,
  ButtonEditImage,
  ButtonEditImageIcon,
  ButtonTrashIcon,
  ContainerButtonAddImage,
  ContainerImage,
  ContainerEditProfile,
  ContainerEditProfileForm,
  DeleteContainer,
  DeleteIcon,
  DeleteText,
  ProfileImage,
  EditProfileTittle,
  EditGalleryTittle,
  EditProfileForm,
  EditFormTittle,
  Gallery,
  GalleryContainer,
} from "./style";

const dogGallery = [
  {
    image01: "",
    image02: "",
  },
];

interface dogData {
  name: String;
  age: Number;
  breed: String;
  gender: Number;
  locale: String;
  avatar: String;
}

export function DogProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [locale, setLocale] = useState("");
  const { showToast } = useToast();
  const lixeira = <FontAwesomeIcon icon={faTrashAlt} />;
  const imagem = <FontAwesomeIcon icon={faImage} />;
  const mais = <FontAwesomeIcon icon={faPlusSquare} />;

  function saveChanges(event: any) {
    event?.preventDefault();
    showToast("Alterações salvas", "green");
  }

  return (
    <>
      <EditProfileTittle>Editar informações do pet</EditProfileTittle>
      <ContainerEditProfile>
        <ContainerImage>
          <ProfileImage src="https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ButtonEditImage>
            <ButtonEditImageIcon>{imagem}</ButtonEditImageIcon>
          </ButtonEditImage>
        </ContainerImage>
        <ContainerEditProfileForm>
          <EditProfileForm onSubmit={saveChanges}>
            <Input
              title="Nome"
              inputStyle="primary"
              placeholder={"Simba"}
              value={name}
              setState={setName}
            />
            <Input
              title="Idade"
              inputStyle="primary"
              placeholder={"4 anos"}
              value={age}
              setState={setAge}
            />
            <Input
              title="Raça"
              inputStyle="primary"
              placeholder={"Dachshund"}
              value={breed}
              setState={setBreed}
            />
            <Input
              title="Sexo"
              inputStyle="primary"
              placeholder={"Macho"}
              value={gender}
              setState={setGender}
            />
            <Input
              title="Localização"
              inputStyle="primary"
              placeholder={"Campina Grande, PB"}
              value={locale}
              setState={setLocale}
            />
            <Button buttonStyle={"primary"}>Salvar</Button>
          </EditProfileForm>
        </ContainerEditProfileForm>
      </ContainerEditProfile>
      <DeleteContainer>
          <DeleteText>Excluir pet</DeleteText>
          <DeleteIcon>{lixeira}</DeleteIcon>
      </DeleteContainer>
      <>
        <EditGalleryTittle>Editar galeria</EditGalleryTittle>
        <GalleryContainer>
          {dogGallery.map((image) => (
            <>
              <Gallery>
                {image.image01}
                {image.image02}
              </Gallery>
              {!image.image01 && !image.image02 ? (
                <></>
              ) : (
                <ButtonTrashIcon>{lixeira}</ButtonTrashIcon>
              )}
            </>
          ))}
        </GalleryContainer>
      </>
      <ContainerButtonAddImage>
        <ButtonAddImage>{mais}</ButtonAddImage>
      </ContainerButtonAddImage>
    </>
  );
}
