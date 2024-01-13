import React from "react";
import { FixedSizeList as List } from "react-window";
import TableRow from "./TableRow";

const DataTable = ({ data, handleCheckboxChange }) => (
  <div className="border border-gray-300">
    {/* Table Headings */}
    <div className="flex border-b border-gray-200">
      <div className="p-2 border-r border-gray-200 w-20">Check</div>
      <div className="p-2 border-r border-gray-200 w-20">ID</div>
      <div className="p-2 border-r border-gray-200 w-80">Name</div>
      <div className="p-2 w-20">Value</div>
    </div>

    {/* Virtualized List for Rows */}
    <List
      height={650}
      width={650}
      itemCount={data.length}
      itemSize={50}
      itemData={{ data, handleCheckboxChange }}
    >
      {TableRow}
    </List>
  </div>
);

export default DataTable;
