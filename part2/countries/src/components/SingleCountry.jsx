const SingleCountry = ({ country }) => {
  return (
    <div className="country">
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
    </div>
  )
};

export default SingleCountry;
