import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => (
  <form>
    <p>Find contacts by name</p>
    <input type="text" name="filter" onChange={onFilter} />
  </form>
);

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
