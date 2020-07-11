import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube'; // default exports dont have curly bracets
import { SearchBar, VideoDetails, VideoList } from './components'; 
// these are also default imports but we imported them from n index file thats why curly bracets.

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onSelectVideo = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part:'snippet',
                maxResults: 5,
                key: 'AIzaSyC1rVoKqIchdygyO1G2s2b4ciniMv599FE',
                q: searchTerm, 
            }
        });
        console.log(response.data.items);
        console.log(response.data.items[3]);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render(){
        const { videos, selectedVideo } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={this.handleSubmit}/>
                </Grid>
                <Grid item xs={8}>
                    <VideoDetails video={selectedVideo}/>
                </Grid>
                <Grid item xs={4}>
                    <VideoList merivideos={videos} onSelectVideo={this.onSelectVideo}/>
                </Grid>
            </Grid>
        )
    }
}

export default App;
