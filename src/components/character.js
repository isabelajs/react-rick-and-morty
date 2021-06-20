import React from 'react'

function Character (props){
  return(
    <li className="col-6 col-md-3">
      <div className="CharacterCard" style={{ backgroundImage: `url(${props.character.image})` }}>
        <div className="CharacterCard__name-container text-truncate">
          {props.character.name}
        </div>
      </div>
    </li>
  
  )
  
}

export default Character