import React from "react";
import { Pokemom } from "../store/pokemons";
import PokemonCard from "./PokemonCard/PokemonCard";
import styled from "styled-components";

type PokemonCardListProps = {
  pokemons: Pokemom[];
};

const PokemonCardList = ({ pokemons }: PokemonCardListProps) => (
  <Container
    className="overflow-y-scroll w-full p-20"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 400px)",
      justifyContent: "center",
    }}
  >
    {pokemons.map((pokemon) => (
      <PokemonCard pokemon={pokemon} />
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  justify-content: center;
`;

export default PokemonCardList;
