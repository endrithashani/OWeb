import React from 'react'
import { Box , Container, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(()=> ({
    map:{
        width : "90%",
        backgroundColor: "#F9F9F9",
        justifyContent: "space-evenly",
        marginTop : 55
    },
}))


const OurServices = () => {
    
    const classes = useStyles()

  return (
    <div className="map-container">
       <Typography
           style={{
            color : "#0048FF",
            fontSize: 40,
            fontWeight : "bold"
        }}
       >
       Our Services
       </Typography>
      <Container className={classes.map} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }} >
        <Box >
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold",
            marginTop: 40,
            marginBottom : 40,
            }}
            >
                IT consulting
            </Typography>
        </Box>
        <Box>
            <Typography
            style={{
            fontSize : 24,
            marginTop: 20,
            marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop: 20,
              marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
        </Box>
      </Container>
      <Container className={classes.map} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }}>
        <Box>
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold",
            marginTop: 40,
            marginBottom : 40,
            }}
            >
            Software Development
            </Typography>
        </Box>
        <Box >
            <Typography
            style={{
            fontSize : 24,
            marginTop: 20,
            marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop: 20,
              marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
        </Box>
      </Container>
      <Container className={classes.map} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }}>
        <Box>
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold",
            marginTop: 40,
            marginBottom : 40,
            }}
            >
            Testing and QA 
            </Typography>
        </Box>
        <Box>
            <Typography
            style={{
            fontSize : 24,
            marginTop: 20,
            marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop: 20,
              marginBottom : 20,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default OurServices
