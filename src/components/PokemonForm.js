import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonData, setPokemonData, pokemonDataUrl}) {

  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: ""
    }
  })

  function submitPokemon() {
  // fetch POST to dataUrl 
  // and add to pokemonData!
    fetch(pokemonDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.sprites.front,
          back: formData.sprites.back
        }
      })
    })
    .then(r => r.json())
    .then(data => setPokemonData([
      ...pokemonData,
      data
    ]))
    setFormData({
      name: "",
      hp: 0,
      sprites: {
        front: "",
        back: ""
      }
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={e => {
          e.preventDefault()
          submitPokemon()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={e => setFormData({...formData,name: e.target.value})} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={e => setFormData({...formData, hp: e.target.value})} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={e => setFormData({...formData, sprites: {...formData.sprites, front: e.target.value}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={e => setFormData({...formData, sprites: {...formData.sprites, back: e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
