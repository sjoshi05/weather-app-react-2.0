import React, { useState } from "react";

export default function Search() {
  const [searchedCity, setSearchedCity] = useState(null);

  const form = (
    <form onSubmit={HandleSubmit}>
      <div className="searchBox  w-5/6 border-slate-400 border-solid border-2 rounded-2xl mx-auto">
        <div className="px-2 grid grid-cols-12">
          <input
            type="search"
            name="city"
            placeholder="Enter a city"
            onChange={UpdateCity}
            className="searchField px-2 col-span-11"
          />
          <button type="submit" className="place-self-end">
            🔍
          </button>
        </div>
      </div>
    </form>
  );

  function HandleSubmit(event) {
    event.preventDefault();
  }

  function UpdateCity(event) {
    setSearchedCity(event.target.value);
    return { searchedCity };
  }

  return form;
}
