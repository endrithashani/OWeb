import React, { useState } from 'react'
import { Button, TextareaAutosize , TextField, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    fields:{
        width: 400,
    },
    textArea:{
        width: 400,
        height: 300,
        color: "inherit"
    }
}))
const ContainerForm = () => {
    const classes = useStyles()

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        number: "",
        text: ""
    })

    const handelSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="form-container">
            <form onSubmit={handelSubmit}>
            <Typography
            style={{
                color: "#0048FF",
                fontSize: 40,
                marginTop : 35,
                marginBottom : 60,
            }}
            >
            Contact Us
            </Typography>
                <TextField
                className={classes.fields}
                value={inputs.name}
                onChange={(e) => setInputs(e.target.value)}
                type={"text"}
                sx={{ margin:3 }}
                placeholder="Full Name"
                variant="outlined"
                >

                </TextField>
                <TextField
                className={classes.fields}
                value={inputs.email}
                onChange={(e) => setInputs(e.target.value)}
                type={"email"}
                sx={{ margin:3 }}
                placeholder="Email Address"
                variant="outlined"
                >
                </TextField>
                <TextField
                className={classes.fields}
                value={inputs.number}
                onChange={(e) => setInputs(e.target.value)}
                type={"tel"}
                sx={{ margin:3 }}
                placeholder="Phone Number"
                variant="outlined"
                >
                </TextField>
                <TextareaAutosize
                value={inputs.text}
                onChange={(e) => setInputs(e.target.value)}
                resize= "none"
                maxRows={4}
                aria-label="maximum height"
                placeholder="Write a message..."
                style={{ width: 400 , height : 100 , backgroundColor: "inherit"}}
                />
                <Button
                type="submit"
                style={{
                    backgroundColor: "#0048FF",
                    color: "#ffffff",
                    marginTop: 25,
                    width : 150
                }}
                >
                Save
                </Button>
            </form>
        </div>
    )
}


export default ContainerForm