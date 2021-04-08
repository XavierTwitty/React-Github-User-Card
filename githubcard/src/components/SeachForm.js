import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [form, setForm] = useState({
    search: "",
  });

  const [errorState, setErrorState] = useState({
    search: "",
  });

  const handleChange = (e) => {
    e.persist();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post()
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="search">search:</label>
        <input
          type="text"
          name="search"
          value={form.search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
export default SearchForm;
