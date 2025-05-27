import { Box, Typography, Paper } from '@mui/material';
import { useAppSelector } from '../../app/store/configureStore';
import React from 'react';

export default function ProfilePage() {
  const { user } = useAppSelector(state => state.account);

  if (!user) return null; // fallback, shouldn't happen if route is protected

  return (
    <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom color="success.main">
          Profile
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Username: {user.username}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Email: rani@gmail.com
        </Typography>
        {/*  extend this later with address, phone, etc. */}
      </Paper>
    </Box>
  );
}
