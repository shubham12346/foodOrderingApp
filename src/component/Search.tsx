import React, { useState } from "react";

const Search = ({ handleSearchText }) => {
  const [inputSearch, setInputText] = useState("");
  const handleOnChange = (e) => {
    setInputText(e?.target.value);
  };

  return (
    <div className="flex  justify-start pt-3 ">
      <input
        type="text"
        name="search"
        id=""
        onChange={handleOnChange}
        value={inputSearch}
        className="p-1 m-2 inputSearch border-2 border-black"
        autoFocus={true}
      />
      <button
        className="p-1 m-2 bg-green-400 rounded"
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
