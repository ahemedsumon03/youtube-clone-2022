import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchApi } from '../utils/FetchApi';
import { Box, Typography } from '@mui/material';
import { Videos } from '../components';

const SearchFeed = () => {

    const { searchTerm } = useParams();

    const [searchVideos, setSearchVideos] = useState([]);

    useEffect(() => {
        fetchApi(`search?part=snippet&q=${searchTerm}`).then(data => {
            setSearchVideos(data?.items);
        }).catch(err => {
            console.log(err);
        });
    }, [searchTerm]);

    return (
        <Box p={2} sx={{
            overflowY: 'auto',
            height: '90vh',
            flex: 2
        }}>
            <Typography variant="h4" fontWeight="bold" mb="2" sx={{
                color: 'white'
            }}>
                Search Result for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
            </Typography>
            <Videos videos={searchVideos} marginRight="120px" />
        </Box>
    )
}

export default SearchFeed