import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Metin Birleştirme Uygulaması
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            170201137 / 190201124
          </Typography>
          <Button color="inherit">Github</Button>
          <Button color="inherit">Github</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}