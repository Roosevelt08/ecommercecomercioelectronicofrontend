import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenidos a Mi Tienda Online
      </Typography>
      <Typography variant="subtitle1">
        Aquí encontrarás los mejores productos al mejor precio.
      </Typography>
    </Container>
  );
}

export default Home;
