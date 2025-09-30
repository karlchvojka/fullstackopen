// Framework Imports
import { useState, useEffect } from 'react';

// Library Imports
import axios from 'axios';

// Component Imports
import Weather from './Weather';

const SingleCountry = ({ buttonDispl, country, displ }) => {
  // State Declarations
  const [dispCount, setDispCount] = useState(displ);

  // Style Declarations
  const labelStyle = {
    display: buttonDispl ? 'block' : 'none'
  };

  const countryStyle = {
    display: dispCount ? 'block' : 'none'
  };

  // Event Handlers
  const toggleDisp = () => {
    setDispCount(!dispCount);
  };

  return (
    <div className="countryWrap">
      <p style={labelStyle}>{country.name.common}<button onClick={toggleDisp}>Show</button></p>
      <div style={countryStyle} id={country.name.common}>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital[0]}</p>
        <p>Area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {
            Object.keys(country.languages).map((key) => (
              <li key={key}>
                <p>{country.languages[key]}</p>
              </li>
            ))
          }
        </ul>
        <div className="flag">
          <img alt={country.flag.alt} src={country.flags.png} />
        </div>
        <Weather city={country.capital[0]} loc={country.capitalInfo.latlng} />
      </div>
    </div>
  )
};

export default SingleCountry;
