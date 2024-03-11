import * as React from "react";
import Box from "@mui/material/Box";
import Widget from "../../components/widget/Widget";
import RevenueBarChart from "../../components/charts/revenue_bar_chart/RevenueBarChart";
import RevenueLineChart from "../../components/charts/revenue_line_chart/RevenueLineChart";
import Grid from "@mui/material/Grid";
import { widgets } from "../../data/dummy";

import "./Home.scss";

export default function Home() {
  return (
    <Box className="home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        className="widgets"
      >
        {widgets.map((widget) => (
          <Widget
            key={widget.type}
            type={widget.type}
            icon={widget.icon}
            link={widget.link}
            isMoney={widget.isMoney}
            amount={widget.amount}
            percentage={widget.percentage}
          />
        ))}
      </Box>

      <Box className="charts">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={10} lg={5}>
            <RevenueBarChart />
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={7}>
            <RevenueLineChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
