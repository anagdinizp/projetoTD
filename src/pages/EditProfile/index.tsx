import { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "../../components/Toast";
import { Input, InputPassword } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  ButtonEditImage,
  ButtonEditImageIcon,
  ContainerEditProfile,
  ContainerEditProfileForm,
  ContainerImage,
  DeleteContainer,
  DeleteIcon,
  DeleteText,
  EditFormTittle,
  EditProfileForm,
  EditProfileTittle,
  ProfileImage,
} from "../EditDogProfile/style";

interface profileData {
  name: String;
  age: Number;
  career: String;
  telefone: Number;
  locale: String;
  email: String;
  senha: String;
  avatar: String;
}

export function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [career, setCareer] = useState("");
  const [locale, setLocale] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const { showToast } = useToast();
  const lixeira = <FontAwesomeIcon icon={faTrashAlt} />;
  const imagem = <FontAwesomeIcon icon={faImage} />;

  function saveChanges(event: any) {
    event?.preventDefault();
    showToast("Alterações salvas", "green");
  }

  return (
    <>
      <EditProfileTittle>Editar informações do perfil</EditProfileTittle>
      <ContainerEditProfile>
        <ContainerImage>
          <ProfileImage src="https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg" />
          <ButtonEditImage>
            <ButtonEditImageIcon>{imagem}</ButtonEditImageIcon>
          </ButtonEditImage>
        </ContainerImage>
        <ContainerEditProfileForm>
          <EditProfileForm onSubmit={saveChanges}>
            <EditFormTittle>Nome</EditFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Ana Gabriela"}
              value={name}
              setState={setName}
            />
            <EditFormTittle>Idade</EditFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"number"}
              placeholder={"23 anos"}
              value={age}
              setState={setAge}
            />
            <EditFormTittle>Profissão</EditFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Estudante"}
              value={career}
              setState={setCareer}
            />
            <EditFormTittle>Contato</EditFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"number"}
              placeholder={"83 98735-0316"}
              value={telephone}
              setState={setTelephone}
            />
            <EditFormTittle>Localização</EditFormTittle>
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
            <EditFormTittle>Email</EditFormTittle>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"anagabriela0399@hotmail.com"}
              value={email}
              setState={setEmail}
            />
            <EditFormTittle>Senha</EditFormTittle>
            <InputPassword
              setState={setPassword}
              type={"password"}
              value={password}
              style={"light"}
              eyeInput={"light"}
            />
            <Button buttonStyle={"primary"}>Salvar</Button>
          </EditProfileForm>
        </ContainerEditProfileForm>
        <DeleteContainer>
          <DeleteText>Excluir conta</DeleteText>
          <DeleteIcon>{lixeira}</DeleteIcon>
        </DeleteContainer>
      </ContainerEditProfile>
    </>
  );
}
