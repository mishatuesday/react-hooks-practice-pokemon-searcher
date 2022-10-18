import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData, searchTerm}) {
  const pokemonSearched = pokemonData.filter(poke => {
    return poke.name.toLowerCase().includes(searchTerm.toLowerCase())
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
