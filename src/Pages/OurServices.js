import React from 'react'
import { Box , Container, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(()=> ({
    map:{
        width : "90%",
        height: 400,
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
      <Container className={classes.map} sx={{ display: "flex" , alignItems: "center"}}>
        <Box>
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold"
            }}
            >
                IT consulting
            </Typography>
        </Box>
        <Box>
            <Typography
            style={{
            fontSize : 24,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop : 5
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
        </Box>
      </Container>
      <Container className={classes.map} sx={{ display: "flex" , alignItems: "center"}}>
        <Box>
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold"
            }}
            >
            Software Development
            </Typography>
        </Box>
        <Box>
            <Typography
            style={{
            fontSize : 24,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop : 5
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
        </Box>
      </Container>
      <Container className={classes.map} sx={{ display: "flex" , alignItems: "center"}}>
        <Box>
            <Typography
            style={{
            color : "#002B9A",
            fontSize: 30,
            fontWeight : "bold"
            }}
            >
            Testing and QA 
            </Typography>
        </Box>
        <Box>
            <Typography
            style={{
            fontSize : 24,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit <br></br> viverra porta tortor, elementum ultrices. Blandit quam nec <br></br> aliquam.
            </Typography>
            <Typography
            style={{
              fontSize : 24,
              marginTop : 5
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
