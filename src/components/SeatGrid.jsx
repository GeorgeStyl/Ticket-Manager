import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import DateModal from './DateModal';

const SeatGrid = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const seats = Array.from({ length: 49 }, (_, i) => ({
    id: `S${i + 1}`,
    number: i + 1
  }));

  const toggleSeat = (id) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Επιλεγμένες θέσεις: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Καμία'}
      </Typography>

      {selectedSeats.length > 0 && (
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => setIsModalOpen(true)}
          sx={{ mb: 3 }}
        >
          Επέλεξε ημ/νια
        </Button>
      )}

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(7, 1fr)', 
        gap: 1,
        width: '100%',
        maxWidth: '450px',
        px: 2
      }}>
        {seats.map((seat) => (
          <Button
            key={seat.id}
            variant={selectedSeats.includes(seat.id) ? "contained" : "outlined"}
            onClick={() => toggleSeat(seat.id)}
            sx={{
              aspectRatio: '1/1',
              minWidth: 0,
              p: 0,
              fontSize: { xs: '0.6rem', md: '0.8rem' },
              bgcolor: selectedSeats.includes(seat.id) ? 'error.main' : 'transparent',
              color: selectedSeats.includes(seat.id) ? 'white' : 'primary.main',
            }}
          >
            {seat.id}
          </Button>
        ))}
      </Box>

      <DateModal 
        open={isModalOpen} 
        handleClose={() => setIsModalOpen(false)} 
      />
    </Box>
  );
};

export default SeatGrid;