import { ApexOptions } from "apexcharts";

export const popularGenresData: Partial<ApexOptions> = {
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
