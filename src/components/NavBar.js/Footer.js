import React , {useState} from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    return (
    <div className="footer">
    <Box sx={{ width: "100%" }} 
    style={{
        marginTop: 100,
    }}>
      <BottomNavigation
        showLabels
        style={{
          backgroundColor: "#F9F9F9"
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <Typography
            onClick={()=> navigate("/")}
            variant="h5"
            component="div"
            style={{ cursor: 'pointer', color: "#000000" , marginLeft: 10, marginTop:10, }}
            sx={{ flexGrow: 1}}
          >
            OWeb
          </Typography>
        <BottomNavigationAction icon={<FacebookRoundedIcon />} />
        <BottomNavigationAction icon={<LinkedInIcon />} />
        <BottomNavigationAction icon={<InstagramIcon />} />
      </BottomNavigation>
    </Box>
    </div>
    )
}


export default Footer