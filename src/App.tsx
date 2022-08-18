import React, { useEffect } from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { pokemonsState } from "./store/pokemons";
import axios from "axios";
import PokemonCardList from "./components/PokemonCardList";
import styled from "styled-components";

function App() {
  const [pokemons, setPokemons] = useRecoilState(pokemonsState);

  const fetchPokemons = async () => {
    const results = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );

    const fetchedPokemons = results?.data?.pokemon;

    if (Boolean(fetchedPokemons?.length)) {
      setPokemons(fetchedPokemons);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <AppContainer>
      <Header className="bg-orange-100 h-20 flex justify-center items-center">
        This is the header
      </Header>
      <Content className="bg-red-100">
        <PokemonCardList pokemons={pokemons} />
      </Content>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto;

  // Using Areas
  /* grid-template-areas:
    "header"
    "content"; */
`;

const Header = styled.div`
  // Using Areas
  /* grid-area: header; */

  // Without Areas
  /* grid-column: span;
  grid-row-start: 1;
  grid-row-end: 2; */

  // Simplification of above
  grid-row: 1 / 2;
`;

const Content = styled.div`
  // Using Areas
  /* grid-area: content; */

  // Without Areas
  /* grid-column: span;
  grid-row-start: 2;
  grid-row-end: 3; */

  // Simplification of above
  grid-row: 2 / 3;
`;
