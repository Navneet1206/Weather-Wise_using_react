import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "5daa6b671278d8b3735bd898352154ba";

    let [error, setError] = useState(false);
    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
            const WeatherResult = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temp: jsonResponse.main.temp,
                weather: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
                tempFeels: jsonResponse.main.feels_like,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                pressure: jsonResponse.main.pressure,
                wind: jsonResponse.wind,
                latitudes: jsonResponse.coord.lat,
                longitudes: jsonResponse.coord.lon,
            };
            console.log(jsonResponse);
            console.log(WeatherResult);
            return WeatherResult;
        } catch (error) {
            throw error;
        }
    };
    let handleChange = (event) => {

        setCity(event.target.value);
    }

    // let handleSubmit = async (evnt) => {

    //     try {
    //         evnt.preventDefault();
    //         console.log(`Search for city = ${city}`);
    //         setCity("");
    //         let newInfo = await getWeatherInfo();
    //         updateInfo(newInfo);
    //     }
    //     catch(err){
    //         setError(true);
    //     }
    // }
    let handleSubmit = async (evnt) => {
        try {
            evnt.preventDefault();
            console.log(`Search for city = ${city}`);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset error state if weather information is successfully retrieved
        } catch (err) {
            setError(true);
        }
    }


    return (

        <div className="searchbox">
            {/* <h3>Search for Weather.</h3> */}
            <form action="" onSubmit={handleSubmit}>
                <p class="fs-3">Please enter a city </p>
                <TextField id="city" variant="outlined" label="City Name" required onChange={handleChange} value={city} />
                <br /><br />
                <Button variant='contained' type='submit' >Search</Button>
                <p>
                    {error && <p style={{ color: "red" }}>No such place exists.</p>}
                </p>
            </form>
        </div>
    )
}