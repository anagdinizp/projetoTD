import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/Card";
import { ButtonIcon, HomeButton, HomeContainer } from "../Home/style";

const cards = [
  {
    name: "Nescau",
    age: 3,
    gender: "Fêmea",
    breed: "Dachshund",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/3148115/pexels-photo-3148115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Flocos",
    age: 3,
    breed: "Dachshund",
    gender: "Fêmea",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/13293906/pexels-photo-13293906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Antônia",
    age: 3,
    breed: "Dachshund",
    gender: "Fêmea",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/6044712/pexels-photo-6044712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Cacau",
    age: 3,
    breed: "Dachshund",
    gender: "Fêmea",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/9082848/pexels-photo-9082848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function Crushs() {
  const descer = <FontAwesomeIcon icon={faArrowDown} />;
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
            color="red"
          />
        ))}
      </HomeContainer>
    </>
  );
}
