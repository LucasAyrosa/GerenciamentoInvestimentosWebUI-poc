import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () =>{
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const loginData = {email, password};
            await login(loginData);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error login:', error);
            toast.error('Erro no login', {
                position: 'top-right',
                autoClose: 3000,
              });
        }
    }

  return isLoggedIn? <Navigate to="/dashboard" /> :
    (<Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom marginTop={5}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth type='submit'>
          Entrar
        </Button>
      </form>
      <Typography align="center" marginTop={2}>
        Não tem uma conta? <Link href="/signup">Cadastrar</Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
