import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { createUser } from './services/api';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';


const SignupPage: React.FC = () =>{
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = { name, email, password };
      await createUser(userData);
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return isLoggedIn ? <Navigate to="/dashboard" /> : (
    <Container component="main" maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom marginTop={5}>
          Nova conta
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Nome" fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} />
          <TextField label="E-mail" fullWidth margin="normal" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Senha" fullWidth margin="normal" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" fullWidth type='submit'>
            Criar conta
          </Button>
        </form>
        <Typography align="center" marginTop={2}>
          Já tem conta? <Link href="/login">Entrar</Link>
        </Typography>
    </Container>
  );
};

export default SignupPage;
