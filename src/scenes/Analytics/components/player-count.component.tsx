import { Card, CardContent, CardHeader } from "@mui/material";

import Chart from "react-apexcharts";

const data = {
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

export const PlayerCount = () => {
  return (
    <Card>
      <CardHeader
        title="Most Played Games"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <Chart
          options={data.options}
          series={data.series}
          type="pie"
          width={500}
          height={320}
        />
      </CardContent>
    </Card>
  );
};
