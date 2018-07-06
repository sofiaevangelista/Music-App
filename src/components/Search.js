import React from "react";
import "../css/Search.css";


const ENTER_KEY_CODE = 13;

class Search extends React.Component {
    searchHandler = e => {
        if (e.keyCode === ENTER_KEY_CODE) {
            e.preventDefault();

            const query = e.target.value;
            this.props.searchFunction(query);
    }
  };

  render() {
    return (
        <div className="search-bar">
          <form>
            <input className="search rounded"
              placeholder="Search..."
              type="text"
              name="searchsongs"
              onKeyDown={this.searchHandler}
            />
          </form>
            <div className="sub">
            {" "}
            <p> Encuentra a tu artista favorito! </p>{" "}
        </div>
      </div>
    );
  }
}

export default Search;
