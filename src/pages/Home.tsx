import { Card } from "../components/Card";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div>
      <div className="flex flex-wrap p-8 justify-center items-center">
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
      </div>
      <button className="flex m-auto justify-center text-center cursor-pointer mb-6">
        <span className="inline-block align-middle text-2xl">{repetir}</span>
      </button>
    </div>
  );
}
