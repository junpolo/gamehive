import { Card, CardContent, CardHeader } from "@mui/material";
import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";
import "../styles/analytics.scss";

const options: Partial<ApexOptions> = {
  labels: ["RPG", "MOBA", "Battle Royale", "Action", "Shooter"],
  series: [156893, 267389, 412999, 90345, 100934],
  stroke: {
    colors: ["##ffffff00"],
    width: [1],
  },
  legend: {
    position: "bottom",
    itemMargin: {
      vertical: 20,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
  },
  chart: {
    events: {
      click: () => null,
    },
  },
};

export const PopularGenres = () => {
  return (
    <Card>
      <CardHeader
        title="Popular Genres"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
      />
      <CardContent className="custom-chart-legend">
        <Chart
          options={options}
          series={options.series}
          type="pie"
          height={510}
        />
      </CardContent>
    </Card>
  );
};
