import { Container, Paper, TextField, Typography, Button, Box, Stack, Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function Register() {
    const [isRegister, setIsRegister] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [username,setUsername] = useState("") 
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("") 

    const handleRegister = (event) => {
        event.preventDefault();
        // Add register logic here
    };

    const toggleRegister = () => {
        setIsRegister(!isRegister);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: 2,
                bgcolor: 'background.default'
            }}
        >
            <Container component="main" maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {isRegister ? (
                        <>
                            <Typography variant="h5" sx={{ mb: 2 }}>Register</Typography>
                            <form className="flex items-center flex-col justify-center" onSubmit={handleRegister} style={{ width: '100%' }}>
                                <Stack position="relative" width="10rem" margin="auto" sx={{ mb: 2, alignItems: 'center' }}>
                                    <Avatar
                                        src={avatar}
                                        sx={{
                                            width: "10rem",
                                            height: "10rem",
                                            objectFit: "contain",
                                            marginBottom: '1rem'
                                        }}
                                    />
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="icon-button-file"
                                        type="file"
                                        onChange={handleAvatarChange}
                                    />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span" sx={{position:"absolute" , bottom:"34px" ,right:"0" ,color:"black"  }} >
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Stack>
                                <TextField
                                    required
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    
                                    onChange={((e)=>setUsername(e.target.value))}
                                />
                                <TextField
                                    required
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    
                                    onChange={((e)=>setEmail(e.target.value))}

                                />
                                <TextField
                                    required
                                    label="Password"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                   
                                    onChange={((e)=>setPassword(e.target.value))}
                                />
                                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                                <Button sx={{ mt: 2 }} component={Link} to="/login">Already Registered? Login</Button>
                            </form>
                        </>
                    ) : (
                        <></>
                    )}
                </Paper>
            </Container>
        </Box>
    );
}

export default Register;
