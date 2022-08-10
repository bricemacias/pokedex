import React from "react";
import { Pokemom } from "../../store/pokemons";
import PokemonCardTypeList from "./PokemonCardTypeList";

type PokemonCardProps = {
  pokemon: Pokemom;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="flex justify-center items-center h-80 mx-2 my-10 overflow-visible">
      <div className="relative flex-col transition-all ease-in-out duration-300 bg-slate-50 rounded-2xl flex justify-center items-center h-72 w-96 hover:mb-3  cursor-pointer shadow-sm hover:shadow-lg">
        <img className="absolute bottom-56 left-1/2" src={pokemon.img} />
        <div className="text-slate-400 font-bold my-6">{`Nº${pokemon.num}`}</div>
        <div className="font-extrabold mb-10">{pokemon.name}</div>
        <PokemonCardTypeList types={pokemon.type} />
      </div>
    </div>
  );
};

export default PokemonCard;
