import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard } from '../components';
import { fetchApi } from '../utils/FetchApi';

const ChannelDetails = () => {
    const { id } = useParams();

    const [channelDetails, setChannelDetails] = useState(null);
    const [channelVideo, setChannelVideo] = useState([]);

    console.log(channelVideo);

    useEffect(() => {
        fetchApi(`channels?part=snippet&id=${id}`).then((response) => {
            setChannelDetails(response?.items[0]);
        }).catch((err) => {
            console.log(err);
        });

        fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
            setChannelVideo(data.items);
        }).catch(err => {
            console.log(err);
        });

    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(63, 119, 101, 1) 35%, rgba(0, 212, 255, 1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }}
                />
                <ChannelCard channel={channelDetails} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box
                    sx={{
                        mr: { sm: '100px' }
                    }}
                />
                <Videos videos={channelVideo} />
            </Box>
        </Box>
    )
}

export default ChannelDetails