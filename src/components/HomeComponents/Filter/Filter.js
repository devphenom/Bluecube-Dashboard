import React from "react";

// data import
import filter from "./Filter.json";

import "./Filter.scss";

// select reusable component
const SelectComponent = ({ select }) => {
  const { title, options } = select;
  return (
    <select>
      <option>{title}</option>
      {options.map((option, key) => (
        <option value={option.val} key={key}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

// default export
const Filter = () => {
  return (
    <section id="filter">
      {filter.map((select, key) => (
        <SelectComponent select={select} key={key} />
      ))}
    </section>
  );
};

export default Filter;
