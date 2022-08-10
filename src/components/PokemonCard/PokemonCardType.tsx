import React from "react";

export type PokemonType =
  | "Normal"
  | "Fire"
  | "Water"
  | "Grass"
  | "Electric"
  | "Ice"
  | "Fighting"
  | "Poison"
  | "Ground"
  | "Flying"
  | "Psychic"
  | "Bug"
  | "Rock"
  | "Ghost"
  | "Dragon"
  | "Dark"
  | "Steel"
  | "Fairy";

type PokemonCardTypeProps = {
  type: PokemonType;
};

const colors: Record<PokemonType, string> = {
  Normal: "#A8A878",
  Fire: "#F08030",
  Water: "#6890F0",
  Grass: "#78C850",
  Electric: "#F8D030",
  Ice: "#98D8D8",
  Fighting: "#C03028",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Flying: "#A890F0",
  Psychic: "#F85888",
  Bug: "#A8B820",
  Rock: "#B8A038",
  Ghost: "#705898",
  Dragon: "#7038F8",
  Dark: "#705848",
  Steel: "#B8B8D0",
  Fairy: "#EE99AC",
};

const PokemonCardType = ({ type }: PokemonCardTypeProps) => {
  return (
    <div
      className="rounded-md text-white flex justify-center items-start text-center font-semibold py-2 px-4 mx-2"
      style={{
        backgroundColor: colors[`${type}`],
      }}
    >
      {type.toUpperCase()}
    </div>
  );
};
export default PokemonCardType;
