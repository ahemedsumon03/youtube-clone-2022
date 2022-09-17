import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetails, Feed, NavBar, SearchFeed, VideoDetails } from './components';

const App = () => {
  return (
    <Box sx={{ background: '#000' }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/vedio/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App