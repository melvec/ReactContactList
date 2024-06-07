import React from "react";

export const Filter = () => {
  return (
    <div className="col p-4 rounded border">
      <select
        name="genderFilter"
        id="genderFilter"
        classNameName="form-control"
        // onChange="handleOnGenderSelect(this)"
      >
        <option value="mercedes">Filter by gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};
