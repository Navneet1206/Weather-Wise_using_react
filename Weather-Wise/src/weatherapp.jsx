import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import "./weatherapp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Hatta",
        country: "IN",
        humidity: 25,
        latitudes: "",
        longitudes: "",
        pressure: "",
        temp: 28.1,
        tempFeels: "29.9",
        tempMax: 32,
        tempMin: 28.1,
        weather: "Clear sky",
        wind: {
            deg: 189,
            gust: 1.16,
            speed: 0.88,
        }
    });

    // Function to update weather information
    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div className="container">
            <div className="box-container">
                <h2 className = "heading__tag">Weather Wise</h2>
                {/* Include both search box and info box inside this container */}
                <div className="content">
                    <SearchBox updateInfo={updateInfo} />
                    <InfoBox info={weatherInfo} />
                </div>
            </div>
        </div>
    );
}
