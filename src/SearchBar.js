import React from "react";

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="container container--add">
        <form id="search-form" method="get" className="search">
          <input type="text" className="search__field" placeholder="Search" />
          <button
            type="submit"
            className="btn btn-md btn--danger search__button"
          >
            search a movie
          </button>
        </form>
      </div>
    </div>
  );
}
