import React, { useState } from "react";
import PetItem from "./PetItem";

export default function SearchBar({ pet }) {
  const [query, setQuery] = useState("");
  const searchQuery = (event) => {
    setQuery(event.target.value);
  };
  const petssea = pet
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);
  const test = pet;
  return (
    <div class="input-group rounded">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={searchQuery}
      />
      {test}
    </div>
  );
}

// export default SearchBar;
