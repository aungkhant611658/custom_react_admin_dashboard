import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./FullFunctionDatatable.scss";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const FullFunctionDatatable = ({
  columns,
  transactions,
  tableTitle = "List",
  responsive = "vertical",
  filterType = "dropdown",
  search = true,
  download = true,
  print = true,
  viewColumns = true,
  filter = true,
  hasMultipleDelete = false,
}) => {
  const options = {
    responsive,
    filterType,
    search,
    download,
    print,
    viewColumns,
    filter,
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={tableTitle}
          data={transactions}
          columns={columns}
          options={options}
          className={`custom-datatable ${
            hasMultipleDelete ? "" : "remove-multiple-delete"
          }`}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FullFunctionDatatable;
