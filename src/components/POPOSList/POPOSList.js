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
        <label for="filter">Filter Spaces:</label>
        <input
          id="filter"
          value={query}
          placeholder="filter"
          aria-describedby='filter-description'
          onChange={(e) => setQuery(e.target.value)}
        />
        <span id='filter-description'>Enter a term to filter the spaces.</span>
      </form>
      <section className="POPOSList">
        { spaces }
      </section>
    </>
  )
}

export default POPOSList