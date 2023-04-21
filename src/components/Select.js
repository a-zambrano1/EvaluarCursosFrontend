import React from "react";

const Select = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="-1">Seleccione una opción</option>
      {options.map((item, i) => (
        <option key={i} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
