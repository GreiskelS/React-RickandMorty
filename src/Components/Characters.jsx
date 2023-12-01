import React, { useEffect, useState } from 'react'
import './css/characters.css'
import { useParams } from 'react-router-dom'
import { uniqueCharacter} from './functions/Functions'
import Nav from 'react-bootstrap/Nav';

const CharacterList = () => {
  const [characters, setCharacters] = useState(null)

  const params = useParams()
  useEffect(() => {
    uniqueCharacter(params.id, setCharacters)
  }, [params.id])

  return (
    <div className="contenedorCharacter">
      {characters != null ? (
        <div className='Character'>
          <div>
          <button type="button" className="btn btn-success" id='buttoncharacter'><Nav.Link href="/RickandMorty">Back</Nav.Link></button>
          </div>
          <div className="card-body">
            <h2><strong>Character Id: </strong>{params.id}</h2>
            <p><strong>Character Name: </strong> {characters.name}</p>
            <p><strong>Species: </strong> {characters.species}</p>
            <p> <strong>Gender: </strong>  {characters.gender}</p>
            <p><strong>Status: </strong>{characters.status}</p>
            <div className="card">
              <img src={characters.image} alt="image rick&morty" />
            </div>
          </div>
        </div>
      ) : ('there is no characters')}
    </div>
  )
}

export default CharacterList;
