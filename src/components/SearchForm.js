import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
    // searchValue.current.value = "";
  }, []);
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktails: </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
