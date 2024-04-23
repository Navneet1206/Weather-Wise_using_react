import * as React from 'react';
import Button from '@mui/material/Button';


let Handling = ()=>{

    console.log("button clicked");
}

export default function ButtonUsage() {

    return <Button variant="contained" onClick={Handling}>Click Here!</Button>;

}