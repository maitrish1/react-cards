import React from 'react';

function Card(props) {
  return (
    <div className='card'>
        <h3>{props.title}</h3>
        <h3>{props.heading}</h3>
        <h4>{props.desc}</h4>
        
    </div>
  )
}

export default Card;
