import { Button, Typography } from "@mui/material";
import React from "react";


const ButtonCustom = ({children}) =>{
    return(
    <Button
    sx={{
        backgroundColor:'rgba(209, 248,100,1)',
        ':hover':{
            backgroundColor:'rgba(209, 248,100,0.7)'
        },
        borderRadius:10,
        color:'black',
        paddingX:2,
        paddingY:1,
        textTransform:'none',
    }}
    >
        <Typography sx={{fontWeight:'bold', fontSize:12}}>
        {children}
        </Typography>
    </Button>
    )
}


export default ButtonCustom