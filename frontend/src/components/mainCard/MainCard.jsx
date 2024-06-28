import React from "react";
import "./MainCard.css"
import icon from './logo.png'
import { Button, Grid, Box} from '@mui/material'
import {Card, CardMedia} from '@mui/material'
import {TextField, InputAdornment} from '@mui/material'
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function MainCard(){
    
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container padding={3} sx={{ width: '100%' }}>
            <Card variant="outlined" sx={{width:'100%'}} className="main-card">
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <CardMedia
                            component="img"
                            alt="Logo"
                            sx={{height:'75%', width:'75%', objectFit:'contain'}}
                            image={icon}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ width:'100%'}}>
                        <Box sx={{pt:4, pr:4, pl:4, alignContent:'center'}}>
                            <h1 className="heading">Say hey!👋 to your loved ones. </h1>
                            <h2 className="quote">Start a video meeting with friends and family today!</h2>
                              
                        </Box>
                        <Box sx={{ pr:5, pt:3, pl:5,  textAlign:'center', display:'flex', flexDirection: isSmallScreen ? 'column' : 'row'}}>
                            <Button 
                            variant="contained" 
                            color="primary"
                            sx={{marginRight:'15px', 
                                width:'100%',
                                marginBottom:'15px',
                            }}
                            startIcon={<DuoSharpIcon className="large-icon" />}>
                            start meeting
                            </Button>

                            <TextField 
                                id="outlined-basic" 
                                label="Enter meeting code" 
                                placeholder="Enter meeting code"
                                variant="outlined"
                                sx={{ width:'100%',
                                    marginBottom:'15px'
                                }}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyboardIcon />
                                    </InputAdornment>
                                    ),
                                }} 
                                />
                                <Button 
                                variant="text" 
                                sx={{
                                    marginBottom:'15px'
                                }}
                                color="primary">
                                <b>join</b>
                                </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MainCard;