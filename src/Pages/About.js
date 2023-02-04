import { Container, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles (()=>({
    container:{
        width : "90%",
        height: 400,
        backgroundColor: "#EDF7FF",
        justifyContent: "space-evenly",
        marginTop: 100,
    },
    paragraph : {
        fontSize: 22
    }
}))

const About = () =>{
    const classes = useStyles()
    return (
    <Container className={classes.container} sx={{ display: 'flex' , alignItems: 'center' }}>
        <Typography
        style={{
            color: "#0048FF",
            fontSize : 30,
            fontWeight : "bold"
        }}
        >
        About Company
        </Typography>
        <Typography
        style={{
            fontSize: 22,
        }}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br></br> duis mi nunc bibendum. Tellus elementum nec lorem eget <br></br> dictumst. Risus in gravida eu, enim lorem. Sed consequat ut <br></br> suspendisse eros. Nunc nunc accumsan, viverra enim. Mi.
        </Typography>
    </Container>   
    )
}


export default About