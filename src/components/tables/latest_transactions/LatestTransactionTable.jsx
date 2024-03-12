import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Avatar from "@mui/material/Avatar";

import "./LatestTransactionTable.scss";
import { latestTransactionData } from "../../../data/dummy";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const LatestTransactionTable = () => {
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
  ];

  const options = {
    responsive: "vertical",
    filterType: "dropdown",
    search: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    // tableBodyHeight,
    // tableBodyMaxHeight,
    // onTableChange: (action, state) => {
    //   console.log(action);
    //   console.dir(state);
    // },
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          // title={"ACME Employee list"}
          data={latestTransactionData}
          columns={columns}
          options={options}
          className="latest-transaction"
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default LatestTransactionTable;
