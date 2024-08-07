import { Container, Paper, TextField, Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();
        // Add login logic here
    };

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
               
                minHeight: '100vh',
            }}
        >
            <Container component={"main"} maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
                    {isLogin ? (
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form className="flex items-center flex-col justify-center " onSubmit={handleLogin} style={{ width: '100%' }}>
                                <TextField
                                    required
                                    label="Username"
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
                                <Button sx={{ mt: 2 }} component={Link} to="/register">Sign Up Instead </Button> 
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

export default Login;
