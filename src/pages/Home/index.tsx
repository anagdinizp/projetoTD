import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/Card";
import { ButtonIcon, HomeButton, HomeContainer } from "./style";

const cards = [
  {
    name: "Elton",
    age: 4,
    gender: "Macho",
    breed: "Pitbull",
    locale: "Salvador, BA",
    dogAvatar:
      "https://images.pexels.com/photos/5860550/pexels-photo-5860550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Lisa",
    age: 2,
    breed: "Pug",
    gender: "Fêmea",
    locale: "Curitiba, PR",
    dogAvatar:
      "https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Lolla",
    age: 2,
    breed: "Shih tzu",
    gender: "Fêmea",
    locale: "Curitiba, PR",
    dogAvatar:
      "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Stark",
    age: 3,
    breed: "Husky Siberiano",
    gender: "Macho",
    locale: "Florianópolis, SC",
    dogAvatar:
      "https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
            color="black"
          />
        ))}
      </HomeContainer>
      <HomeButton>
        <ButtonIcon>{repetir}</ButtonIcon>
      </HomeButton>
    </>
  );
}
