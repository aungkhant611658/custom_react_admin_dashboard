import React from "react";
import Avatar from "@mui/material/Avatar";
import FullFunctionDatatable from "../../components/datatables/FullFunctionDatatable";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { red } from "@mui/material/colors";

import { latestTransactionData } from "../../data/dummy";

const List = () => {
  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "img",
      label: "Profile",
      options: {
        customBodyRender: (val) => {
          return <Avatar variant="circular" src={val}></Avatar>;
        },
      },
    },
    {
      name: "product",
      label: "Product",
    },
    {
      name: "customer",
      label: "Customer",
    },
    {
      name: "date",
      label: "Date",
    },
    {
      name: "amount",
      label: "Amount",
    },
    {
      name: "method",
      label: "Method",
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (val) => {
          return <span className={`status ${val}`}>{val}</span>;
        },
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {/* <button onClick={() => console.log(value, tableMeta)}>
                Edit
              </button> */}
              <IconButton color="primary" aria-label="view">
                <VisibilityRoundedIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="edit">
                <ModeEditRoundedIcon />
              </IconButton>
              <IconButton style={{ color: red[500] }} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <FullFunctionDatatable
      tableTitle="Users"
      columns={columns}
      transactions={latestTransactionData}
    />
  );
};

export default List;
