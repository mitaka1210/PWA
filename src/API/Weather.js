import axios from 'axios';
import API_KEY from '../config_keys';
require('dotenv').config();

const URL = 'https://api.openweathermap.org/data/2.5/weather';




const fetchWeather = async (query) => {
    const {
        data
    } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
export default fetchWeather
