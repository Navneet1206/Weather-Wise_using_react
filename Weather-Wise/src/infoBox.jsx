import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />;
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

// export default function InfoBox({ info }) {

//     // Define icon elements
//     const winterIcon = <span class="material-icons-outlined">ac_unit</span>;
//     const summerIcon = <span class="material-icons-outlined">wb_sunny</span>;
//     const monsoonIcon = <span class="material-icons-outlined">cloud_queue</span>;

//     return (
//         <div className="info-box">
//             <div className="box">
//                 <Card sx={{ maxWidth: 345 }} id="box">
//                     <CardMedia
//                         component="img"
//                         alt="Clear Sky"
//                         height="140"
//                         image={info.humidity > 80 ? monsoon : info.temp > 25 ? summer : winter}
//                     />
//                     <CardContent>
//                         <div className='icons'>
//                             <span>{info.city}</span>&nbsp;&nbsp;
//                             <span>
//                                 {info.humidity > 80 ? monsoonIcon : info.temp > 25 ? summerIcon : winterIcon}
//                             </span>
//                         </div>
//                         <Typography variant="body2" color="text.secondary" component={"span"}>
//                             <p>Temperature : {info.temp}&deg;C</p>
//                             <p>Humidity : {info.humidity}&deg;C</p>
//                             <p>Temperature Min : {info.tempMin}&deg;C</p>
//                             <p>Temperature Max : {info.tempMax}&deg;C</p>
//                             <p>Temperature can be described as <i>{info.weather}</i> and feels like <i>{info.tempFeels}</i></p>
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );

export default function InfoBox({ info }) {

    // const imgUrl = "./elements/summer.webp";
    const winter = "./elements/winter.jpg";
    const summer = "./elements/summer.jpg";
    const monsoon = "./elements/monsoon.jpg";
    const winterLogo = "./elements/winter-logo.jpg";
    const summerLogo = "./elements/summer-logo.jpg";
    const monsoonLogo = "./elements/rain-logo.jpg";
    // const winterIcon = <span class="material-symbols-outlined">ac_unit</span>
    // const summerIcon = <span class="material-symbols-outlined">
    //     sunny
    // </span>
    // const monsoonIcon = <span class="material-symbols-outlined">
    //     thunderstorm
    // </span>

    return (

        <div className="info-box">
            {/* <h1>Weather Condition = {info.weather}</h1> */}
            <div className="box">
                <Card sx={{ maxWidth: 345 }} id="box">
                    <CardMedia
                        component="img"
                        alt="Clear Sky"
                        height="140"
                        image={info.humidity > 80 ? monsoon : info.temp > 20 ? summer : winter}
                    />
                    <CardContent >
                        <div className="icons">
                            <Typography>
                                <h2>{info.city}&nbsp;&nbsp;{
                                    info.humidity>80?<ThunderstormIcon/>:info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>
                                }
                                </h2>
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>
                                Temperature : {info.temp}&deg;C
                            </p>
                            <p>
                                Humidity : {info.humidity}&deg;C
                            </p>
                            {/* <p>
                                weather : {`Feels like  ${info.weather}`}
                            </p> */}
                            <p>
                                Temperature Min : {info.tempMin}&deg;C
                            </p>
                            <p>
                                Temperature Max : {info.tempMax}&deg;C
                            </p>
                            <p>Temperature can be described as <i>{info.weather}</i> and feels like <i>{info.tempFeels}</i></p>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}