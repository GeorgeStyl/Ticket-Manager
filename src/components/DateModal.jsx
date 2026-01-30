import * as React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 450 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export default function DateModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          Επιλογή Ημερομηνίας
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>

        <Button 
          fullWidth 
          variant="contained" 
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Επιβεβαιωση
        </Button>
      </Box>
    </Modal>
  );
}