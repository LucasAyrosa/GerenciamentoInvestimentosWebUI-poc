import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, ToggleButtonGroup, ToggleButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { operationType } from './interfaces/createOperation';
import { Type } from 'typescript';
import { NumericFormat } from 'react-number-format';
import { insertOperation } from './services/api';

const AddOperationPage: React.FC = () =>{
    const { login, isLoggedIn } = useAuth();

    const [ticket, setTicket] = useState('');
    const [custodity, setCustodity] = useState('');
    const [wallet, setWallet] = useState('');
    const [type, setType] = useState(operationType.buy);
    const [quantity, setQuantity] = useState(0);
    const [unitValue, setUnitValue] = useState(0);

    const handleSetNumber = (value: string, setFucn: React.Dispatch<React.SetStateAction<number>>) => {
        console.log(value)
        if(!isNaN(Number(value)))
            setFucn(Number(value));
    }

    const eraseForm = () => {
        setTicket('');
        setCustodity('');
        setWallet('');
        setType(operationType.buy);
        setQuantity(0);
        setUnitValue(0);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const operationData  = { ticket, custodity, wallet, type, quantity, unitValue };
            await insertOperation(operationData);
            eraseForm();
            toast.success('Operação cadastrada com sucesso');
        } catch (error) {
            console.error('Error na adição de operação:', error);
            toast.error('Erro na adição de operação', {
                position: 'top-right',
                autoClose: 3000,
              });
        }
    }

    const handleType = (event: React.MouseEvent<HTMLElement>, newType: operationType) => {
        setType(newType);
    }

  return isLoggedIn?
    (    <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom marginTop={5}>
            Adicionar operação
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
                label="Ticket"
                fullWidth
                margin="normal"
                value={ticket}
                onChange={e => setTicket(e.target.value)}
            />
            <TextField
                label="Custodiante"
                fullWidth
                margin="normal"
                type="text"
                value={custodity}
                onChange={e => setCustodity(e.target.value)}
            />
            <TextField 
            label='Carteira'
            fullWidth
            margin='normal'
            type='text'
            value={wallet}
            onChange={e => setWallet(e.target.value)}
            />
            <ToggleButtonGroup value={type} exclusive onChange={handleType} >
                <ToggleButton value={operationType.buy}>
                    Compra
                </ToggleButton>
                <ToggleButton value={operationType.sell}>
                    Venda
                </ToggleButton>
            </ToggleButtonGroup>
            <TextField 
            label='Quantidade'
            fullWidth
            margin='normal'
            type='text'
            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
            value={quantity}
            onChange={e => handleSetNumber(e.target.value, setQuantity)}
            />
            <TextField 
            label='Valor unitário'
            fullWidth
            margin='normal'
            type='text'
            inputProps={{inputMode: 'numeric'}}
            value={unitValue.toFixed(2).replace('.', ',')}
            onChange={e => handleSetNumber(e.target.value.replace(',', '.'), setUnitValue)}
            InputProps={{
                startAdornment: <InputAdornment position='start'>R$</InputAdornment>
            }}
            />
            {/* <NumericFormat value={unitValue.toFixed(2)} decimalScale={2} decimalSeparator=',' customInput={TextField} fullWidth displayType='input' prefix='R$' onChange={e => handleSetNumber(e.target.value, setUnitValue)}/> */}
            <Button variant="contained" color="primary" fullWidth type='submit'>
                Inserir operação
            </Button>
            </form>
        </Container>
  ): <Navigate to="/dashboard" />;
};

export default AddOperationPage;
