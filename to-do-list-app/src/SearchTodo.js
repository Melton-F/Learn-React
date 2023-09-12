import React from "react";

export const SearchTodo = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (!search) return;
        setSearch("");
      }}
    >
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="search here your todos"
        role="Search todos"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
};
