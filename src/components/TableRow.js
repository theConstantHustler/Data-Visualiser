import React from "react";

const TableRow = ({ index, style, data }) => {
  const row = data.data[index];
  return (
    <div style={style} className="flex border-b border-gray-200 font-light">
      <div className="p-2 border-r border-gray-200 w-20 text-center">
        <input
          type="checkbox"
          checked={row.checked}
          onChange={() => data.handleCheckboxChange(index)}
          className="form-checkbox"
        />
      </div>
      <div className="p-2 border-r border-gray-200 w-20">{row.id}</div>
      <div className="p-2 border-r border-gray-200 w-80">{row.name}</div>
      <div className="p-2 w-20">{row.value}</div>
    </div>
  );
};

export default TableRow;
