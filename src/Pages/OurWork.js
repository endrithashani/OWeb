import React from "react";
import { Box, Button , Container, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import image2 from '../images/bro2.png'
import image3 from '../images/rafiki.png'
const useStyles = makeStyles (()=>({
    services:{
        width : "90%",
        backgroundColor: "#FFF5FF",
        justifyContent: "space-evenly",
        marginTop : 55
    },
    servicesSoft:{
        width : "90%",
        backgroundColor: "#F5F8FF",
        justifyContent: "space-evenly",
        marginTop : 55
    }
}))

const OurWork = () => {
    const classes = useStyles()
    return (
    <div className="services-container">
    <Typography
    style={{
        color : "#0048FF",
        fontSize: 40,
        fontWeight : "bold"
    }}
    >
    Our Work
    </Typography>
    <Container className={classes.services} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }}>
        <Box>
            <Typography 
            variant="h4"
            style={{
                color : "#002B9A",
                fontSize: 30,
                fontWeight : "bold",
                marginTop: 40
            }}
            >
                IT enterprises
            </Typography>
            <Typography 
            style={{
                fontSize: 24,
                marginTop: 51,
            }}
            >Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Consequat bibendum sit felis, <br></br> sollicitudin et. Nulla aliquet integer hac ac morbi.</Typography>
            <Button
            variant= "outlined"
            style={{
                color : "#0048FF",
                marginTop: 50,
                marginBottom: 40
            }}
            >
            Learn More <ArrowRightAltIcon/>
            </Button>
        </Box>
        <Box>
            <img src={image2} alt="services"/>
        </Box>
    </Container>
    <Container className={classes.servicesSoft} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap-reverse', sm: 'block' } }}>
            <Box>
                <img src={image3} alt="services-2"/>
            </Box>
        <Box>
            <Typography 
            variant="h4"
            style={{
                color : "#002B9A",
                fontSize: 30,
                fontWeight : "bold",
                marginTop: 40
            }}
            >
            Software product companies
            </Typography>
            <Typography 
            style={{
                fontSize: 24,
                marginTop: 51,
            }}
            >Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Consequat bibendum sit felis, <br></br> sollicitudin et. Nulla aliquet integer hac ac morbi.</Typography>
            <Button
            variant= "outlined"
            style={{
                color : "#0048FF",
                marginTop: 50,
                marginBottom: 40
            }}
            >
            Learn More <ArrowRightAltIcon/>
            </Button>
        </Box>
    </Container>
    </div>
    )
}

export default OurWork