import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/Card";
import { ButtonIcon, HomeButton, HomeContainer } from "./style";

const cards = [
  {
    name: "Caramelo",
    age: 4,
    gender: "Fêmea",
    breed: "Labrador",
    locale: "Curitiba, PR",
    dogAvatar:
      "https://images.pexels.com/photos/102508/pexels-photo-102508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Thor",
    age: 2,
    breed: "Husky Siberiano",
    gender: "Macho",
    locale: "Florianópolis, SC",
    dogAvatar:
      "https://images.pexels.com/photos/2853130/pexels-photo-2853130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Apolo",
    age: 3,
    breed: "Poodle",
    gender: "Macho",
    locale: "João Pessoa, PB",
    dogAvatar:
      "https://images.pexels.com/photos/8576306/pexels-photo-8576306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Lana",
    age: 2,
    breed: "Shi Tzu",
    gender: "Fêmea",
    locale: "Aracaju, SE",
    dogAvatar:
      "https://images.pexels.com/photos/936317/pexels-photo-936317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export function Home() {
  const repetir = <FontAwesomeIcon icon={faRepeat} />;
  return (
    <>
      <HomeContainer>
        {cards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            age={card.age}
            gender={card.gender}
            breed={card.breed}
            locale={card.locale}
            dogImage={card.dogAvatar}
          />
        ))}
      </HomeContainer>
      <HomeButton>
        <ButtonIcon>{repetir}</ButtonIcon>
      </HomeButton>
    </>
  );
}
