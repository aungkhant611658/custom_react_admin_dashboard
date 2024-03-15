import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FullFunctionDatatable from "../../components/datatables/FullFunctionDatatable";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { red } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";

import { latestTransactionData } from "../../data/dummy";
import "./List.scss";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";

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
    <Box className="list">
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <ButtonWithIcon />
        </Grid>
      </Grid>
      <FullFunctionDatatable
        tableTitle="Users"
        columns={columns}
        transactions={latestTransactionData}
      />
    </Box>
  );
};

export default List;
