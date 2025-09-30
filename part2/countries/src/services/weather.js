// Library Imports
import axios from 'axios';

// Constant Declarations
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getWeather = (loc) => {
  const locURLOpts = `lat=${loc[0]}&lon=${loc[1]}&units=metric&appid=${apiKey}`;
  const baseAPIURL = `https://api.openweathermap.org/data/2.5/weather?${locURLOpts}`;

  const request = axios.get(baseAPIURL);
  return request.then(response => response.data);
};

export default { getWeather };
