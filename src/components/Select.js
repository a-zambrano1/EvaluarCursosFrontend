import React from 'react';
import "../pages/Consult.css";

const Select = ({ options, onChange }) => {
  return (
    <select className='container4' onChange={onChange}>
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