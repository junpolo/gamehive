import { Card, CardContent, CardHeader } from "@mui/material";
import { orange, blue } from "@mui/material/colors";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export const AnnualSales = () => {
  const options: Partial<ApexOptions> = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Total Income",
        data: [
          1000, 4100, 3500, 5100, 4900, 7000, 7000, 9100, 14800, 4000, 4800,
          5500,
        ],
      },
      {
        name: "Total Expenses",
        data: [
          1000, 3400, 1300, 5600, 7700, 8800, 9000, 7500, 4500, 1500, 5000,
          4500,
        ],
      },
    ],
    colors: [blue[500], orange[600]],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "#fff",
      },
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    stroke: {
      curve: "smooth",
    },
  };

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
        <Chart options={options} series={options.series} type="area" />
      </CardContent>
    </Card>
  );
};
