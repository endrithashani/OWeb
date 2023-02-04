import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    footer:{
        marginTop: 55,
        backgroundColor: "#000000"
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
    <div className="footer">
        <Container 
        className={classes.footer}
        >
            <Box>
                <Typography>
                    OWeb
                </Typography>
            </Box>
        </Container>
    </div>
    )
}


export default Footer