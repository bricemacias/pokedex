import React from "react";
import { Pokemom } from "../store/pokemons";
import PokemonCard from "./PokemonCard/PokemonCard";

type PokemonCardListProps = {
  pokemons: Pokemom[];
};

const PokemonCardList = ({ pokemons }: PokemonCardListProps) => (
  <div className="overflow-y-scroll w-full py-10">
    {pokemons.map((pokemon) => (
      <PokemonCard pokemon={pokemon} />
    ))}
  </div>
);

export default PokemonCardList;
