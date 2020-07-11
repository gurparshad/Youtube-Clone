import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './videoItem'; 

const VideoList = (props) => {
    const listOfVideos = props.merivideos.map((video, id) => {
    return <VideoItem onVideoSelect = {props.onSelectVideo} key={id} video={video}/>
})
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;