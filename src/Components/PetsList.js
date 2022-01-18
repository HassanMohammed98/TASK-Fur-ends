import { useState } from "react";
import PetItem from "./PetItem";

export default function PetsList(props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const pets = props.pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .filter((pet) => pet.type.toLowerCase().includes(type.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);
  const searchQuery = (event) => {
    setQuery(event.target.value);
  };
  const changePetType = (event) => {
    setType(event.target.value);
  };
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={searchQuery}
                />
              </div>
              <br />
              Type:
              <select class="form-select" onChange={changePetType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}
