import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import YTData from "./api";
import { searchBar, VideoList, VideoDetail, SearchBar } from "./components";

class App extends Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTearm) => {
    const response = await YTData.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "key",
        q: searchTearm,
      },
    });
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST  */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
