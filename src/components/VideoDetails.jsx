import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchApi } from '../utils/FetchApi';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from '../components';

const VideoDetails = () => {

    const { id } = useParams();
    const [videoDeatils, setVideoDetails] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchApi(`videos?part=snippet,statistics&id=${id}`).then(data => {
            setVideoDetails(data.items[0]);
        }).catch(err => {
            console.log(err);
        });

        fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(data => {
            setVideos(data.items);
        }).catch(err => {
            console.log(err);
        });

    }, [id]);

    if (!videoDeatils) return 'loading...';

    const { snippet, statistics } = videoDeatils;
    console.log(snippet, statistics);

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{
                        width: '100%',
                        position: 'sticky',
                        top: '86px'
                    }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography p={2} fontWeight="bold" color='#fff' variant="h5">{snippet?.title}</Typography>
                        <Stack direction='row' justifyContent='space-between'>
                            <Link to={`/channel/${snippet?.channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff" pl={2}>
                                    {snippet?.channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap="20px" alignItems="center" mr="15px">
                                <Typography variant="body1" color="white">
                                    {parseInt(statistics?.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" color="white">
                                    {parseInt(statistics?.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={videos} flexDirection="column" />
                </Box>
            </Stack>
        </Box >
    )
}

export default VideoDetails