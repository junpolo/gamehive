import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import { useGetLeaderboardData } from "./hooks/use-get-leaderboard-data.hook";

export const Leaderboard = () => {
  const { data } = useGetLeaderboardData();
  return (
    <Paper
      sx={{
        padding: 3,
      }}
    >
      <Grid item display={"flex"} flexDirection={"column"} paddingBottom={2}>
        <Typography fontWeight={600}>Leaderboard</Typography>
        <Typography color={"gray"} variant="caption" fontWeight={500}>
          Most played games for this week.
        </Typography>
      </Grid>
      <Stack
        sx={{
          overflow: "auto",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {data.map((data, index) => (
          <>
            <Grid
              key={index}
              mb={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              pt={2}
            >
              <Grid display={"flex"}>
                <img
                  style={{
                    height: 30,
                    marginRight: 15,
                    marginTop: 4,
                  }}
                  src={data.logo}
                  className="img"
                />
                <Grid display={"flex"} flexDirection={"column"}>
                  <Typography variant="caption" fontWeight={600}>
                    {data.gameName}
                  </Typography>
                  <Typography variant="caption">{data.peak}</Typography>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="caption" fontWeight={700}>
                  {data.developer}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
          </>
        ))}
      </Stack>
    </Paper>
  );
};
