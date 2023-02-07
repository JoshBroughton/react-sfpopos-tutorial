import React from 'react';
import { Link } from 'react-router-dom'

import './POPOSSpace.css'

function POPOSSpace(props) {
  const { id, name, image, address, hours } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img className="spaceImage" src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="50 Califonia St."
        />
      </Link>
      <Link to={`/details/${id}`}>
        <h1>{ name }</h1>
      </Link>    
      <div>{ address }</div>
      <p>{ hours }</p>
    </div>
  )
}

export default POPOSSpace