import React from "react";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";
import { MoreVert } from "@mui/icons-material";

import "./NormalChart.scss";

const NormalChart = () => {
  const pData = [2400, 1398, 9800, 3908, 4800, 3800];
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
  const valueFormatter = (value) => `$${value}`;

  return (
    <Box className="normalChart">
      <Box
        className="top"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 className="title">Last 6 Months (Revenue)</h1>
        <MoreVert fontSize="small" />
      </Box>

      <Box className="bottom" sx={{ width: "100%" }}>
        <div className="chartWrapper">
          <LineChart
            series={[
              {
                data: pData,
                area: true,
                label: "Total Revenue",
                valueFormatter,
              },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{ width: "100%" }}
            height={400}
          />
        </div>
      </Box>
    </Box>
  );
};

export default NormalChart;
