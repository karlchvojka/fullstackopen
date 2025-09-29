// Framework Imports
import { useState, useEffect } from 'react';

// Library Imports
import axios from 'axios';

// Component Imports
import Content from './components/Content.jsx';

const App = () => {
  // State Delcarations
  const [countries, setCountries] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  // Event Handler Functions
  const handleSearchChange = (event) => {
    const newTerm = event.target.value;
    const filteredCountries =
      newTerm.trim().length === 0
        ? countries
        : countries.filter((country) => country.name.common.toLowerCase().includes(newTerm.trim().toLowerCase()));
    setSearchTerm(newTerm);
    setFiltered(filteredCountries);
  };

  return (
    <div>
      <p>find countries <input onChange={handleSearchChange} /></p>
      <Content countries={filtered} />
    </div>
  );
};

export default App;
