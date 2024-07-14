import React, { useState } from "react";

const Search = ({ handleSearchText }) => {
  const [inputSearch, setInputText] = useState("");
  const handleOnChange = (e) => {
    setInputText(e?.target.value);
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        name="search"
        id=""
        onChange={handleOnChange}
        value={inputSearch}
        className="inputSearch"
      />
      <button
        className="inputButton"
        onClick={() => {
          handleSearchText(inputSearch);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
