import { atom } from "recoil";
import { PokemonType } from "../components/PokemonCard/PokemonCardType";

export type Pokemom = {
  id: string;
  num: string;
  name: string;
  img: string;
  type: PokemonType[];
};

export const pokemonsState = atom<Pokemom[]>({
  key: "pokemonsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
