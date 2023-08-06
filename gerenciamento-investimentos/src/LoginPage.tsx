import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom marginTop={5}>
        Login
      </Typography>
      <form>
        <TextField
          label="E-mail"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Senha"
          fullWidth
          margin="normal"
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth>
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
