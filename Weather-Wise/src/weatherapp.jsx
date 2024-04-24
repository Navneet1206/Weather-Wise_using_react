import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import Header from "./header";
import "./weatherapp.css";




export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({

        city: "",
        country: "null",
        humiditiy: null,
        latitudes: "",
        longitudes: "",
        pressure: "",
        temp: null,
        tempFeels: "",
        tempMax: null,
        tempMin: null,
        weather: "",
        wind: {
            deg: 189,
            gust: 1.16,
            speed: 0.88,
        }
    });

    let updateInfo = (result)=>{

        setWeatherInfo(result);
    }
    return (

        <div style={{ textAlign: "center" }} className="container">
            {/* <h2>Weather Wise</h2> */}
            
            <SearchBox updateInfo = {updateInfo}  />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}