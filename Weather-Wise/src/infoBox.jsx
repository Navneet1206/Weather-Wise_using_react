import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css";
export default function InfoBox({info}) {

    const imgUrl = "./elements/summer.webp";
    return (

        <div className="info-box">
            {/* <h1>Weather Condition = {info.weather}</h1> */}
            <div className="box">
                <Card sx={{ maxWidth: 345 }} id="box_inside">
                    <CardMedia
                        component="img"
                        alt="Clear Sky"
                        height="140"
                        image={imgUrl}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
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