import { DogInfoContainer, DogMiniIcon, DropdownCardContainer, DogName } from "./style";

const myDogs = [
  {
    avatar:
      "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Simba",
  },
  {
    avatar:
      "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bisteca",
  },
];

export const DropdownCard = () => {
  return (
    <DropdownCardContainer>
      {myDogs.map((dog) => (
        <DogInfoContainer>
          <DogMiniIcon src={dog.avatar} />
          <DogName>{dog.name}</DogName>
        </DogInfoContainer>
      ))}
    </DropdownCardContainer>
  );
};
