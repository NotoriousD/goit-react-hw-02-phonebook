import React from "react";

const Filter = ({ onFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="filter" onChange={onFilter} />
  </>
);

export default Filter;
