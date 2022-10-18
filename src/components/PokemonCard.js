import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [frontOfCard, setFrontOfCard] = useState(true)
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={frontOfCard ? pokemon.sprites.front : pokemon.sprites.back} onClick={() => setFrontOfCard(!frontOfCard)} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
// this should only exist in test branch
