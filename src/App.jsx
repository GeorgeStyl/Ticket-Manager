import { Box, Typography } from '@mui/material';
import theatreImg from './assets/stage.jpeg';
import SeatGrid from './components/SeatGrid';

function App() {
  return (
    <Box 
      sx={{ 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',    
        justifyContent: 'flex-start', 
        m: 0, 
        p: 0,
        overflowX: 'hidden'      
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold',
          mt: 5,                 
          mb: 3, 
          textAlign: 'center'
        }}
      >
        Κλείστε εισιτήρια
      </Typography>

      <Box
        component="img"
        src={theatreImg}
        alt="Theatre Stage"
        sx={{
          width: '40%',          
          maxWidth: '800px',     
          height: 'auto',
          borderRadius: 4,
          boxShadow: '0px 10px 30px rgba(0,0,0,0.4)'
        }}
      />

      <SeatGrid />  
    </Box>
  );
}

export default App;