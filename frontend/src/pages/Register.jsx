import { Container, Paper, TextField, Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
    const [isRegister, setIsRegister] = useState(true);

    const handleRegister = (event) => {
        event.preventDefault();
        // Add Register logic here
    };

    const toggleRegister = () => {
        setIsRegister(!isRegister);
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
               
                minHeight: '80vh',
                marginTop:'5px'  
            }}
        >
            <Container component={"main"} maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
                    {isRegister ? (
                        <>
                            <Typography variant="h5">Register</Typography>
                            <form className="flex items-center flex-col justify-center " onSubmit={handleRegister} style={{ width: '100%' }}>
                                <TextField
                                    required
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                                 <TextField
                                    required
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    
                                    fullWidth
                                />
                                <TextField
                                    required
                                    label="Password"
                                    margin="normal"
                                    variant="outlined"
                                    type="password" 
                                    fullWidth
                                />
                               
                                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                                <Button sx={{ mt: 2 }} component={Link} to="/login">Already Registered? Login  </Button> 
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
