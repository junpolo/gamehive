import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Leaderboard, FeatureGames } from "@/components";

export const GameAnalytics = () => {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Typography variant="h3">App Layout</Typography>
      <Outlet />
      <Grid display={"flex"} padding={3} gap={5}>
        <Grid
          container
          width={650}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FeatureGames />
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          width={450}
          sx={{
            marginTop: "20px",
          }}
        >
          <Leaderboard />
        </Grid>
      </Grid>
    </Grid>
  );
};

// import { Box, Grid, Typography } from "@mui/material";
// // import { Outlet } from "react-router-dom";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   Rectangle,
// } from "recharts";

// export const AppLayout = () => {
//   const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
//   return (
//     <main>
//       <Grid
//         container
//         padding={3}
//         justifyContent={"center"}
//         alignItems={"center"}
//         flexDirection={"column"}
//       >
//         <Grid item gap={2} display={"flex"} flexDirection={"column"}>
//           <Grid display={"flex"} alignItems={"center"} gap={1}>
//             <ArrowBackIosIcon sx={{ fontSize: 20 }} />
//             <Typography variant="caption">Back to Dashboard</Typography>
//           </Grid>
//           <Grid>
//             <Typography variant="h5" fontWeight={700}>
//               Dota 2
//             </Typography>
//             <Typography variant="caption">
//               Explore the game data analysis
//             </Typography>
//           </Grid>
//           <Box
//             className="img"
//             component={"img"}
//             src="https://wallpapercave.com/wp/wp2532627.jpg"
//             width={800}
//             height={300}
//             sx={{ backgroundSize: "contain" }}
//             borderRadius={5}
//           />
//         </Grid>
//         <Grid item p={2} display={"flex"}>
//           <LineChart
//             width={900}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="pv"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </Grid>
//       </Grid>
//       {/* <Outlet /> */}
//     </main>
//   );
// };
