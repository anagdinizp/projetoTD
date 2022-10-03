import { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "../../components/Toast";
import { Input } from "../../components/Input";
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
          <ProfileImage src="https://avatars.githubusercontent.com/u/79330582?v=4" />
          <ButtonEditImage>
            <ButtonEditImageIcon>{imagem}</ButtonEditImageIcon>
          </ButtonEditImage>
        </ContainerImage>
        <ContainerEditProfileForm>
          <EditProfileForm onSubmit={saveChanges}>
            <Input
              title={"Nome"}
              inputStyle="primary"
              placeholder={"Ana Gabriela"}
              value={name}
              setState={setName}
            />
            <Input
              title="Idade"
              inputStyle="primary"
              placeholder={"23 anos"}
              value={age}
              setState={setAge}
            />
            <Input
              title="Profissão"
              inputStyle="primary"
              placeholder={"Estudante"}
              value={career}
              setState={setCareer}
            />
            <Input
              title="Contato"
              inputStyle="primary"
              placeholder={"83 98735-0316"}
              value={telephone}
              setState={setTelephone}
            />
            <Input
              title="Localização"
              inputStyle="primary"
              placeholder={"Campina Grande, PB"}
              value={locale}
              setState={setLocale}
            />
            <Input
              title={"Email"}
              inputStyle="primary"
              placeholder={"anagabriela0399@hotmail.com"}
              value={email}
              setState={setEmail}
            />
            <Input
              title={"Senha"}
              inputStyle="primary"
              setState={setPassword}
              value={password}
              password
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
