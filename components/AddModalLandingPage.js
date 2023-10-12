import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'; // Import Autocomplete and TextField

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddModalLandingPage = ({ isOpen, onRequestClose, novels }) => {
  const [selectedNovel, setSelectedNovel] = useState('');

  const handleAddNovel = () => {
    // Handle adding the selected novel here
    console.log('Adding novel:', selectedNovel);

    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Novel
        </Typography>
        
        {/* Use Autocomplete for the dropdown */}
        <Autocomplete
          value={selectedNovel}
          onChange={(event, newValue) => {
            setSelectedNovel(newValue);
          }}
          options={novels}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Select a novel" />}
        />

        <Button
          onClick={handleAddNovel}
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            color: 'white',
          }}
          style={{ backgroundColor: 'green' }}
        >
          Add Novel
        </Button>
      </Box>
    </Modal>
  );
};

export default AddModalLandingPage;
