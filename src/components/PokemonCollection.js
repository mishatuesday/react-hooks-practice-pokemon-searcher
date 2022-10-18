import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData, searchTerm}) {
  console.log("pokemoncollection", searchTerm)
  const pokemonSearched = pokemonData.filter(poke => {
    return poke.name.includes(searchTerm)
  })

  return (
    <Card.Group itemsPerRow={6}>
      
      {pokemonSearched.map(pokemon => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
      })}
      
    </Card.Group>
  );
}

export default PokemonCollection;
