import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';

import data from '../../data/sfpopos-data.js';
import './POPOSList.css';


function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress
  }).map(({ id, title, address, images, hours }) => {
      return (
        <POPOSSpace
          id={ id }
          key={`${title}-${id}`} 
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      )
    })

  return (
    <>
      <form>
          <input
            value={query}
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      <div className="POPOSList">
        { spaces }
      </div>
    </>
  )
}

export default POPOSList