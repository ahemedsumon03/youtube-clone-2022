import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from '../components';
import { fetchApi } from '../utils/FetchApi';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchApi(`search?part=snippet&q=${selectedCategory}`).then(response => {
            console.log(setVideos(response.items));
        }).catch(err => {
            console.log(err);
        });
    }, [selectedCategory]);

    return (
        <Stack
            sx={{ flexDirection: { sm: 'column', md: 'row' } }}
        >
            <Box
                sx={{
                    height: { sm: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d',
                    px: { xs: 0, md: 2 }
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Typography className="copyright" variant="body2" sx={{
                    mt: 1.5, color: '#fff'
                }}>
                    Copyright 2022 Javascript media
                </Typography>
            </Box>
            <Box sx={{
                p: 2,
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        color: '#fff'
                    }}
                >{selectedCategory} <span style={{
                    color: '#F31503'
                }}>Videos</span></Typography>
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}

export default Feed