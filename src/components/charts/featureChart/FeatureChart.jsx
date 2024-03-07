import React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

import "./FeatureChart.scss";
import { MoreVert } from "@mui/icons-material";

const FeatureChart = () => {
  const chartSetting = {
    xAxis: [
      {
        label: "Dollar ($)",
      },
    ],
    height: 400,
  };

  const dataset = [
    {
      amount: 21,
      month: "Jan",
    },
    {
      amount: 28,
      month: "Feb",
    },
    {
      amount: 41,
      month: "Mar",
    },
    {
      amount: 73,
      month: "Apr",
    },
    {
      amount: 99,
      month: "May",
    },
    {
      amount: 144,
      month: "June",
    },
    {
      amount: 319,
      month: "July",
    },
    {
      amount: 249,
      month: "Aug",
    },
    {
      amount: 131,
      month: "Sept",
    },
    {
      amount: 55,
      month: "Oct",
    },
    {
      amount: 48,
      month: "Nov",
    },
    {
      amount: 25,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `$${value}`;

  return (
    <Box className="featureChart">
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
        <h1 className="title">This Month Total Revenue</h1>
        <MoreVert fontSize="small" />
      </Box>

      <Box className="bottom" sx={{ width: "100%" }}>
        <div className="chartWrapper">
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "amount", label: "Total Revenue", valueFormatter },
            ]}
            layout="horizontal"
            {...chartSetting}
            sx={{ width: "100%" }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default FeatureChart;
