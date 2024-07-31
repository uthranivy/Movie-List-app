import React from "react";

const DataTable = (props) => {
  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
    </tr>
  );
};

export default DataTable;
