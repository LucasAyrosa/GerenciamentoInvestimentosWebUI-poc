import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { CssBaseline, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';


const SidebarLayout: React.FC = () =>  {
const {isLoggedIn} = useAuth();

  return isLoggedIn ? 
    (< >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Sidebar Layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
      >
        <div  />
        <List>
          <ListItem  component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>
      <main >
        <div />
        <Container>
          <Outlet /> 
        </Container>
      </main>
    </>)
    :<Navigate to="/login" />;
};

export default SidebarLayout;
