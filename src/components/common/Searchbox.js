import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
