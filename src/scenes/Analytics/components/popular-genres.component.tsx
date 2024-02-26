import { Card, CardContent, CardHeader } from "@mui/material";
import Chart from "react-apexcharts";

import "../styles/analytics.scss";
import { popularGenresData } from "@core/data";

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
          options={popularGenresData}
          series={popularGenresData.series}
          type="pie"
          height={510}
        />
      </CardContent>
    </Card>
  );
};
