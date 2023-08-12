import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAuth } from '../contexts/AuthContext';
import AppBar from '@mui/material/AppBar';
import AddIcon from '@mui/icons-material/Add';
import { Container, Fab, Zoom } from '@mui/material';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { AccountBalanceWallet, Close, Dashboard, Savings } from '@mui/icons-material';


const SidebarLayout: React.FC = () =>  {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();

  const [openButton, setOpenButton] = React.useState(false);

  const handleButtonClick: ()=>void = () => {
    setOpenButton(!openButton);
  };

  const handleRedirect= (path: string) => {
    handleButtonClick();
    navigate(path);
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return isLoggedIn ? 
    (<>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GIFx - Gerenciamento de Investimentos Financeiros
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHdeader> */}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        {/* </DrawerHdeader> */}
        <Divider />
        <List>
          <ListItem key={'dashboard'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={'Operações'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText>Operações</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={'Proventos'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Savings />
              </ListItemIcon>
              <ListItemText>Proventos</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader /> */}
        <Container sx={{marginTop: '64px'}}>
          <Outlet /> 
          <Zoom in={!openButton}>
            <Fab color="primary" aria-label="options" onClick={handleButtonClick} style={{position: 'fixed', bottom: '20px', right: '20px'}}>
              <AttachMoneyIcon />
            </Fab>
          </Zoom>
          <Zoom in={openButton}>
            <Fab color="secondary" aria-label="options" onClick={handleButtonClick} style={{position: 'fixed', bottom: '20px', right: '20px'}}>
              <Close />
            </Fab>
          </Zoom>
          {openButton && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem', position: 'fixed', bottom: '80px', right: '20px'}}>
                <Zoom in={openButton}>
                <Fab variant='extended' color="secondary" onClick={() => handleRedirect('/operacao/nova')}>
                    <AddIcon /> Operação
                </Fab>
                </Zoom>
                <Zoom in={openButton}>
                <Fab variant='extended' color="secondary" onClick={() => handleRedirect('/dashboard')}>
                  <AddIcon /> Provento
                </Fab>
                </Zoom>
              </div>
            )}
        </Container>
      {/* </Main> */}
    </Box>
    </>)
    :<Navigate to="/login" />;
};

export default SidebarLayout;
