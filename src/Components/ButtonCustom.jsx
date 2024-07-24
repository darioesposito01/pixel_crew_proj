import { Button } from "@mui/material";
import React from "react";


const ButtonCustom = ({children}) =>{
    return(
    <Button
    
    sx={{
        backgroundColor:'#D1F864',
        borderRadius:10,
        color:'black',
        paddingX:2,
        paddingY:1,
        textTransform:'none'
        
    }}
    >
        {children}
    </Button>
    )
}


export default ButtonCustom