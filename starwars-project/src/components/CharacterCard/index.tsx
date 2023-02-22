import axios from "axios";
import React, {useEffect, useState} from "react";
import Navbar from "../Navbar";
import "./styles.css"

interface ICharacter{
  name: string,
  height: string,
  gender: string,
  spaceships: string[],
  homeworld: string,
}

export const CharacterCard: React.FC = () => {

  const [character, setCharacter] = useState<ICharacter>();

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1/')
    .then(response => response.data)
    .then(response => setCharacter(response));
  }, [])

  return (
    <>
      <h1>Personagens</h1>
      <Navbar/>
      <div className="card">
      <strong>{character?.name}</strong>
      <small>{character?.height}</small>
      <small>{character?.gender}</small>
      </div>
    </>
  );
}

export default CharacterCard;