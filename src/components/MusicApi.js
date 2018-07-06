import axios from "axios";
import React from "react";
import List from "./List.js";

const iTunesApiUrl = "https://itunes.apple.com/search?term=";

class MusicApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
    this.getSongs = this.getSongs.bind(this);
  }

  getSongs() {
    const apiUrl = iTunesApiUrl + this.props.query;

    return axios.get(apiUrl).then(response => {
      this.setState({ songs: response.data.results });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.getSongs();
    }
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="musicapi">
        <List songs={songs} />
      </div>
    );
  }
}

export default MusicApi;
