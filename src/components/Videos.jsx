import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos, flexDirection }) => {

    if (!videos) return 'Loading....';

    return (
        <Stack
            flexDirection={flexDirection || 'row'}
            alignItems="start"
            flexWrap='wrap'
            gap={2}
        >
            {
                videos.map((item, index) => (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channel={item} />}
                    </Box>
                ))
            }
        </Stack >
    )
}

export default Videos