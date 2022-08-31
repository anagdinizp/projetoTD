import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useToast } from "../components/Toast";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <strong className="flex justify-center font-bold text-xl p-2 mt-5 md:text-2xl">
        Editar informações do pet
      </strong>
      <div className="grid gap-2 ml-5 mr-5 border-b">
        <div className="flex flex-col items-center">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden"
            src="https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              placeholder={"Simba"}
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
              placeholder={"4 anos"}
              value={age}
              setState={setAge}
            />
            <strong className="text-black text-base mb-1 md:text-2xl">
              Raça
            </strong>
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
            <strong className="text-black text-base mb-1 md:text-2xl">
              Sexo
            </strong>
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
            <div className="">
              <Button styleButton={{ color: "nude", size: "s" }}>Salvar</Button>
            </div>
          </form>
        </div>
        <div className="flex justify-end items-center cursor-pointer">
          <span className="text-base md:text-xl">Excluir pet</span>
          <button>
            <span className="inline-block align-middle ml-3 text-2xl">
              {lixeira}
            </span>
          </button>
        </div>
      </div>
      <div>
        <strong className="flex justify-center font-bold text-xl p-2 mb-5 mt-5 md:text-2xl">
          Editar galeria
        </strong>
        <div className="flex justify-around">
          <div className="flex items-center">
            {dogGallery.map((image) => (
              <>
                <div className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4">
                  {image.image01}
                  {image.image02}
                </div>
                {!image.image01 && !image.image02 ? (
                  <></>
                ) : (
                  <button>
                    <span className="inline-block align-middle ml-3 text-2xl">
                      {lixeira}
                    </span>
                  </button>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-5 cursor-pointer">
        <button>
          <span className="inline-block align-middle ml-3 text-3xl">
            {mais}
          </span>
        </button>
      </div>
    </>
  );
}
