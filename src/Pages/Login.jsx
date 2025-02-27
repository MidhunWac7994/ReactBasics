import React from 'react';
import { Button, TextField, Box, Typography, Container, CssBaseline } from '@mui/material';
import useLogin from '../CustomHooks/useLogin';

const Login = () => {
  const { username, password, error, setUsername, setPassword, handleSubmit } = useLogin();  

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: 'white' }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: 'gray',
              },
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
