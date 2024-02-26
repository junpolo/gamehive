import { Card, CardContent, CardHeader } from "@mui/material";
import Chart from "react-apexcharts";

import { annualSalesData } from "@core/data";

export const AnnualSales = () => {
  return (
    <Card>
      <CardHeader
        title="Annual Sales"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
        subheader="+69.420% than last year"
        subheaderTypographyProps={{
          variant: "body2",
        }}
      />
      <CardContent>
        <Chart
          options={annualSalesData}
          series={annualSalesData.series}
          type="area"
        />
      </CardContent>
    </Card>
  );
};
