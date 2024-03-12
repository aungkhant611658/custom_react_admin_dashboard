import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import "./LatestTransactionTable.scss";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const LatestTransactionTable = () => {
  const columns = ["ID", "Name", "Title", "Location"];

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

  const data = [
    [1, "Gabby George", "Business Analyst", "Minneapolis"],
    [
      2,
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas",
    ],
    [3, "Jaden Collins", "Attorney", "Santa Ana"],
    [4, "Franky Rees", "Business Analyst", "St. Petersburg"],
    [5, "Aaren Rose", null, "Toledo"],
    [6, "Johnny Jones", "Business Analyst", "St. Petersburg"],
    [7, "Jimmy Johns", "Business Analyst", "Baltimore"],
    [8, "Jack Jackson", "Business Analyst", "El Paso"],
    [9, "Joe Jones", "Computer Programmer", "El Paso"],
    [10, "Jacky Jackson", "Business Consultant", "Baltimore"],
    [11, "Jo Jo", "Software Developer", "Washington DC"],
    [12, "Donna Marie", "Business Manager", "Annapolis"],
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          // title={"ACME Employee list"}
          data={data}
          columns={columns}
          options={options}
          className="latest-transaction"
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default LatestTransactionTable;
