import React from "react";
import PokemonCardType, { PokemonType } from "./PokemonCardType";

type PokemonTypesProps = {
  types: PokemonType[];
};

const PokemonCardTypeList = ({ types }: PokemonTypesProps) => (
  <div className="flex justify-center items-start">
    {types.map((type) => (
      <PokemonCardType type={type} />
    ))}
  </div>
);

export default PokemonCardTypeList;
