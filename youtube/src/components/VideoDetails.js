import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({video}) => { // distructuring used, normal sintax is (props) and then props.video

    let videoSrc = null;
    let videoTitle = null;
    let channelTitle = null;
    let videoDescription = null;
    try{  // the code dont work without try catch block, dont know why??????
        videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        videoTitle = video.snippet.title;
        channelTitle = video.snippet.channelTitle;
        videoDescription = video.snippet.description;

    }catch(err){
        console.log(err);
    }
    
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width = "100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{videoTitle}-{channelTitle}</Typography>
                <Typography variant="subtitle1">{videoDescription}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;