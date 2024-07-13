import { Container, Paper, TextField, Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(false);

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
                            <form onSubmit={handleLogin} style={{ width: '100%' }}>
                                <TextField
                                    required
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                                {/* Add other form fields as necessary */}
                                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                            </form>
                        </>
                    ) : (
                        <Button onClick={toggleLogin} variant="contained" color="primary">Show Login</Button>
                    )}
                </Paper>
            </Container>
        </Box>
    );
}

export default Login;
