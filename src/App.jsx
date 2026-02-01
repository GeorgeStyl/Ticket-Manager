import { Box, Typography, Button, useMediaQuery, useTheme, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theatreImg from './assets/stage.jpeg';
import SeatGrid from './components/SeatGrid';
import { createBookingDTO } from './types/createBookingDTO'

// Cinematic Theme Configuration
const myCustomTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914' },
    background: { default: '#1a1c20' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "radial-gradient(circle, #2c3e50 0%, #000000 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
  },
});

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [step, setStep] = useState(1);
  
  const isMobile = useMediaQuery(myCustomTheme.breakpoints.down('md'));

  const handleDateSelect = (newValue) => {
    setSelectedDate(newValue);
    if (isMobile) setStep(2);
  };

  const handleFinalSubmit = (seats) => {
    // ? Combine the date from App and seats from SeatGrid
    const bookingData = createBookingDTO(selectedDate, seats);
    
    console.log("Sending DTO to backend:", bookingData);
  };

  return (
    <ThemeProvider theme={myCustomTheme}>
      <CssBaseline />
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        
        {/* Responsive Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '800px', mb: 3 }}>
          {isMobile && step === 2 && (
            <Button onClick={() => setStep(1)} startIcon={<ArrowBackIcon />} sx={{ color: 'white' }}>Πίσω</Button>
          )}
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
            {step === 1 ? "Επιλέξτε Ημερομηνία" : "Επιλέξτε Θέσεις"}
          </Typography>
        </Box>

        {/* STEP 1: CALENDAR */}
        {(step === 1 || !isMobile) && (
          <Box sx={{ display: (isMobile && step !== 1) ? 'none' : 'block', mb: 4, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, p: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={selectedDate} onChange={handleDateSelect} />
            </LocalizationProvider>
          </Box>
        )}

        {/* STEP 2: SEATS */}
        {(step === 2 || (!isMobile && selectedDate)) && (
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src={theatreImg}
              alt="Stage"
              sx={{ width: isMobile ? '70%' : '35%', borderRadius: 2, mb: 3, boxShadow: 10 }}
            />
            {/* Pass the data to SeatGrid for DTOing */}
            <SeatGrid selectedDate={selectedDate} isMobile={isMobile} onFinalSubmit={handleFinalSubmit} />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;