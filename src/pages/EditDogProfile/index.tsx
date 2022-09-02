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
  ContainerDogImage,
  ContainerEditDog,
  ContainerEditPetForm,
  DeletePetContainer,
  DeletePetIcon,
  DeletePetText,
  DogImage,
  EditDogTittle,
  EditGalleryTittle,
  EditPetForm,
  EditPetFormTittle,
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
      <EditDogTittle>Editar informações do pet</EditDogTittle>
      <ContainerEditDog>
        <ContainerDogImage>
          <DogImage src="https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ButtonEditImage>
            <ButtonEditImageIcon>{imagem}</ButtonEditImageIcon>
          </ButtonEditImage>
        </ContainerDogImage>
        <ContainerEditPetForm>
          <EditPetForm onSubmit={saveChanges}>
            <EditPetFormTittle>Nome</EditPetFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Simba"}
              value={name}
              setState={setName}
            />
            <EditPetFormTittle>Idade</EditPetFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"number"}
              placeholder={"4 anos"}
              value={age}
              setState={setAge}
            />
            <EditPetFormTittle>Raça</EditPetFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Dachshund"}
              value={breed}
              setState={setBreed}
            />
            <EditPetFormTittle>Sexo</EditPetFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Macho"}
              value={gender}
              setState={setGender}
            />
            <EditPetFormTittle>Localização</EditPetFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Campina Grande, PB"}
              value={locale}
              setState={setLocale}
            />
            <Button styleButton={{ color: "nude", size: "s" }}>Salvar</Button>
          </EditPetForm>
        </ContainerEditPetForm>
        <DeletePetContainer>
          <DeletePetText>Excluir pet</DeletePetText>
          <DeletePetIcon>{lixeira}</DeletePetIcon>
        </DeletePetContainer>
      </ContainerEditDog>
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
