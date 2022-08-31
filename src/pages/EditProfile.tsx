import { useState } from "react";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";
import { useToast } from "../components/Toast";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    event?.preventDefault()
    showToast("Alterações salvas", "green")
  }

  return (
    <>
      <strong className="flex justify-center font-bold text-xl mt-5 p-2 md:text-2xl">Editar informações do perfil</strong>
      <div className="grid gap-2 ml-5 mr-5">
        <div className="flex flex-col items-center">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden"
            src="https://pbs.twimg.com/profile_images/1562216319918931968/Unr7rsbO_400x400.jpg"
          />
          <button className="mt-2">
            <span className="inline-block align-middle text-2xl">{imagem}</span>
          </button>
        </div>
        <div className="flex md:w-[600px] justify-self-center">
          <form
            onSubmit={saveChanges}
            className="flex flex-col gap-2 w-full h-full"
          >
            <strong className="text-black text-base mb-1 md:text-2xl">
              Nome
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Idade
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Profissão
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Contato
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Localização
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Email
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Senha
            </strong>
            <InputPassword
              setState={setPassword}
              type={"password"}
              value={password}
              style={"light"}
              eyeInput={"light"}
            />
            <div className="">
              <Button styleButton={{ color: "nude", size: "s" }}>
                Salvar
              </Button>
            </div>
          </form>
        </div>
        <div className="flex justify-end items-center cursor-pointer">
          <span className="text-base md:text-xl">Excluir conta</span>
          <button>
            <span className="inline-block align-middle ml-3 text-2xl">{lixeira}</span>
          </button>
        </div>
      </div>
    </>
  );
}
