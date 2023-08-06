import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';

const SignupPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom marginTop={5}>
          Nova conta
        </Typography>
        <form>
          <TextField label="Nome" fullWidth margin="normal" />
          <TextField label="E-mail" fullWidth margin="normal" type="email" />
          <TextField label="Senha" fullWidth margin="normal" type="password" />
          <Button variant="contained" color="primary" fullWidth>
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
