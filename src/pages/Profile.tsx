import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
    <div>
      <div className="bg-white border-b border-b-gray-400 block md:flex">
        <div className="md:ml-10 md:p-10">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
            src={owner.avatar}
          />
        </div>
        <div className="block text-black font-extralight p-10 ml-1 md:p-20 md:-ml-16">
          <div className="flex justify-between">
            <strong className="block text-black font-bold text-2xl mr-1 md:text-4xl md:mr-8">
              {owner.name}
            </strong>
            <a href="/editar" className="justify-items-center">
              <span className="inline-block align-middle text-2xl">
                {editar}
              </span>
            </a>
          </div>
          <strong className="block font-bold text-lg mt-4 md:mt-10 text-start">
            Idade:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              {owner.age} anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Profissão:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              {owner.career}
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Localização:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              {owner.locale}
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Contato:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              {owner.telefone}
            </span>
          </strong>
        </div>
      </div>
      {dogs.map((dog) => (
        <div className="bg-white rounded-lg border-b border-b-gray-400 md:flex md:justify-between">
          <div className="md:ml-10 md:p-10">
            <img
              className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
              src={dog.dogAvatar}
            />
          </div>
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
        </div>
      ))}
    </div>
  );
}
