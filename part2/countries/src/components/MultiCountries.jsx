
// Component Imports
import SingleCountry from './SingleCountry.jsx';

const MultiCountries = ({ countries }) => {
  return (
    <div>
      { 
        countries.map((country) => {
          return (
            <div key={country.name.common} className="countryWrap" id={country.name.common}>
              <SingleCountry buttonDispl={true} country={country} displ={false} />
            </div>
          )
        })
      }
    </div>
  )
};

export default MultiCountries;
