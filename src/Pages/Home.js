import { Box, Button, Container , Typography } from '@mui/material'
import {makeStyles } from '@material-ui/core/styles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import firstPhoto from '../images/bro.png'
import React from 'react'

const useStyles = makeStyles(()=>({
    main : {
        width: "90%"

    },
}))

const Home = () => {

    const classes = useStyles()
    return(
        <div className='home-container'>
        <Container className={classes.main}  sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }} >
            <Box>
            <Typography
            variant='h5'
            style={{
                fontSize: 30,
                color: '#0048FF',
                fontWeight: "bold",
            }}
            >
            Providing Industry Leading Solutions
            </Typography>
            <Typography 
            style={{
                marginTop: 45,
                fontSize : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant <br></br> cras morbi hendrerit nunc vel sapien. In habitass at diam <br></br> suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi <br></br> ut donec in. Ac diam, at sed cras nisi. 
            </Typography>
            <Button
            variant='contained'
            endIcon={<ArrowRightAltIcon />}
            style={{
                marginTop: 45,
                color: "#ffffff",
                backgroundColor : "#0048FF"
            }}
            >
                Learn More
            </Button>
            </Box>
            <Box>
            <img className="home-image" src={firstPhoto} alt='firstPhoto'/>
            </Box>
        </Container>
    </div>
    )
}


export default Home