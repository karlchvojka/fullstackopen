// Framework Imports
import { useState, useEffect } from 'react';

// Component Imports
import Content from './components/Content.jsx';

// Services Imports
import countriesService from './services/countries';

const App = () => {
  // State Delcarations
  const [countries, setCountries] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    countriesService
      .getAll().then(initialCountries => {
        setCountries(initialCountries);
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
