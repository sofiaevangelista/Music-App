import React from "react";
import "./../css/List.css";

class List extends React.Component {
  render() {
    const songs = this.props.songs;
      return (
        <div className="list">
          {songs.map(p => {
            const releaseDate = new Date(p.releaseDate);

          return (

            <div key={p.trackId} className="main">
                <h1 className="titlesongs">
                  {p.trackName} - {p.artistName}
                </h1>
                <img src={p.artworkUrl100} className="thumbnail" alt="" />

                  <ul className="ListSongs">
                    <li className="resultsSongs">
                      <p><strong>Álbum:</strong>{" "}
                      {p.collectionName}</p>
                    </li>
                    <li className="resultsSongs">
                      <p><strong>Año:</strong>{" "}
                      {releaseDate.getFullYear()}</p>
                    </li>
                    <li className="resultsSongs">
                      <p><strong>Género:</strong>{" "}
                      {p.primaryGenreName} </p>
                    </li>
                  </ul>
            </div>

          );
        })}
      </div>
    );
  }
}

export default List;
