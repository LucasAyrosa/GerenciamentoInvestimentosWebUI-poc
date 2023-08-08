import { Button, Card, CardContent, Fab, Typography, Zoom } from '@mui/material';
import React from 'react';
import {faker} from '@faker-js/faker';
import { Doughnut, Line } from 'react-chartjs-2';
import AddIcon from '@mui/icons-material/Add';
import {Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, CategoryScale,LinearScale,PointElement,LineElement);

const DashboardPage: React.FC = () => {
  const data = {
    labels: ['Ações', 'FIIs', 'Renda Fixa', 'Fundos de Investimento'],
    datasets: [
      {
        data: [15000, 10000, 8000, 12000], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4caf50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  const labelslinhas = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const datalinhas = {
    labels: labelslinhas,
    datasets: [
      {
        label: 'Seu desempenho',
        data: labelslinhas.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Ibosvespa',
        data: labelslinhas.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Selic',
        data: labelslinhas.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(56, 235, 53)',
        backgroundColor: 'rgba(56, 235, 53, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '2rem'}}>
      <Card variant="outlined" style={{  width: '100%', minWidth: 300, maxWidth: '50vh' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Meu patrimônio
          </Typography>
          <Typography style={{marginBottom: '2rem', fontWeight: 'bold' }}>
            R$ 45,000.00
          </Typography>
          <Doughnut data={data} options={options} />
        </CardContent>
        <Button style={{display: 'flex', marginLeft: 'auto'}} >Ver investimentos</Button>
      </Card>

      <Card variant="outlined" style={{ width: '100%', minWidth: 300, maxWidth: '50vh' }}>
        <CardContent>
          <Line options={options} data={datalinhas} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
