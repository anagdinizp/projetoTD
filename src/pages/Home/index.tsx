import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/Card";
import { ButtonIcon, HomeButton, HomeContainer } from "./style";

const cards = [
  {
    name: "Simba",
    age: 4,
    gender: "Macho",
    breed: "Dachshund",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bisteca",
    age: 2,
    breed: "Dachshund",
    gender: "Macho",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
