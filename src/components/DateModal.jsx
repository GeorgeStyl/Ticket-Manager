import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const SeatGrid = ({ selectedDate, isMobile }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 49 }, (_, i) => ({
    id: `S${i + 1}`
  }));

  const toggleSeat = (id) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleFinalConfirm = () => {
    if (!selectedDate || selectedSeats.length === 0) return;
    console.log("Confirmed Date:", selectedDate.format('YYYY-MM-DD'));
    console.log("Confirmed Seats:", selectedSeats);
    alert(`Κράτηση για ${selectedDate.format('DD/MM/YYYY')}\nΘέσεις: ${selectedSeats.join(', ')}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
        Επιλεγμένες: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Καμία'}
      </Typography>

      <Box sx={{ 
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: isMobile ? 0.5 : 1,
        width: '100%', maxWidth: isMobile ? '320px' : '450px', mb: 4 
      }}>
        {seats.map((seat) => (
          <Button
            key={seat.id}
            variant={selectedSeats.includes(seat.id) ? "contained" : "outlined"}
            onClick={() => toggleSeat(seat.id)}
            sx={{
              aspectRatio: '1/1', minWidth: 0, p: 0, color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              bgcolor: selectedSeats.includes(seat.id) ? 'error.main' : 'transparent',
              fontSize: isMobile ? '0.6rem' : '0.8rem'
            }}
          >
            {seat.id}
          </Button>
        ))}
      </Box>

      {selectedSeats.length > 0 && (
        <Box sx={{ display: 'flex', gap: 2, width: '100%', maxWidth: '450px', px: 2 }}>
          <Button fullWidth variant="outlined" color="inherit" onClick={() => setSelectedSeats([])} sx={{ color: 'white' }}>
            Καθαρισμος
          </Button>
          <Button fullWidth variant="contained" color="success" onClick={handleFinalConfirm}>
            Επιβεβαιωση
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SeatGrid;