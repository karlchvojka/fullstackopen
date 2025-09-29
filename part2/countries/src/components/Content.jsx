// Component Imports
import MultiCountries from './MultiCountries.jsx';
import SingleCountry from './SingleCountry.jsx';

const Content = ({ countries }) => {
  if (countries.length === 1) {
    return <SingleCountry country={countries[0]} />
  } else if (countries.length < 10 && countries.length > 1) {
    return <MultiCountries countries={countries} />
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else {
    return <p>Welcome to the Country Search Engine. Enter a country name above.</p>
  }
}

export default Content
