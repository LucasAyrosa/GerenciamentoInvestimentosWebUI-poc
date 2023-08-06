import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { CssBaseline, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Container } from '@mui/material';


const SidebarLayout: React.FC<{
    authorized: boolean;
  }> = ({ authorized }) =>  {
  return authorized ? 
    (<div >
      <CssBaseline />
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
    </div>)
    :<Navigate to="/login" />;
};

export default SidebarLayout;
