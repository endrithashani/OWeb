import { Container, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles (()=>({
    container:{
        width : "90%",
        backgroundColor: "#EDF7FF",
        justifyContent: "space-evenly",
        marginTop: 100,
    },
}))

const About = () =>{
    const classes = useStyles()
    return (
    <Container className={classes.container} sx={{alignItems: 'center' , display: {  lg: "flex", xs: 'wrap', sm: 'block' } }}>
        <Typography
        style={{
            color: "#0048FF",
            fontSize : 30,
            fontWeight : "bold",
        }}
        >
        About Company
        </Typography>
        <Typography
        style={{
            fontSize: 22,
            marginBottom: 50,
            marginTop: 40,
        }}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br></br> duis mi nunc bibendum. Tellus elementum nec lorem eget <br></br> dictumst. Risus in gravida eu, enim lorem. Sed consequat ut <br></br> suspendisse eros. Nunc nunc accumsan, viverra enim. Mi.
        </Typography>
    </Container>   
    )
}


export default About