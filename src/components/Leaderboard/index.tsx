import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";

const GAMEDATA = [
  {
    gameName: "Valorant",
    peak: "20k+",
    logo: "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png",
    developer: "Riot",
  },
  {
    gameName: "Dota 2",
    peak: "15k+",
    logo: "https://w7.pngwing.com/pngs/361/42/png-transparent-dota-2-dota-2-league-of-legends-the-international-video-game-axe-logo-game-logo-international-thumbnail.png",
    developer: "Valve",
  },
  {
    gameName: "GTA V",
    peak: "12k+",
    logo: "https://pngimg.com/d/gta_PNG13.png",
    developer: "Rockstar",
  },
  {
    gameName: "Rainbow Six Siege",
    peak: "10k+",
    logo: "https://images.cults3d.com/EpUb9MJeVfHFhap6f7pzMEeXZbY=/246x246/filters:no_upscale()/https://files.cults3d.com/uploaders/20470091/illustration-file/4a3bc3b5-3a54-4c8d-bdfa-0232fc950341/Rainbow-Six-Symbol.png",
    developer: "Ubisoft",
  },
  {
    gameName: "Red Dead Redemption II",
    peak: "9.5k+",
    logo: "https://cdn2.steamgriddb.com/icon/f6ad645a331d5e5e95938c1439ba385d/32/256x256.png",
    developer: "Rockstar",
  },
  {
    gameName: "Destiny 2",
    peak: "9.2k+",
    logo: "https://www.freepnglogos.com/uploads/download-destiny-logo/destiny-2-destiny-logo-nouvelles-informations-sur-destiny-14.png",
    developer: "Bungie Inc.",
  },
  {
    gameName: "Destiny 2",
    peak: "9.2k+",
    logo: "https://www.freepnglogos.com/uploads/download-destiny-logo/destiny-2-destiny-logo-nouvelles-informations-sur-destiny-14.png",
    developer: "Bungie Inc.",
  },
  {
    gameName: "Destiny 2",
    peak: "9.2k+",
    logo: "https://www.freepnglogos.com/uploads/download-destiny-logo/destiny-2-destiny-logo-nouvelles-informations-sur-destiny-14.png",
    developer: "Bungie Inc.",
  },
  {
    gameName: "Destiny 2",
    peak: "9.2k+",
    logo: "https://www.freepnglogos.com/uploads/download-destiny-logo/destiny-2-destiny-logo-nouvelles-informations-sur-destiny-14.png",
    developer: "Bungie Inc.",
  },
];

export const Leaderboard = () => {
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
        {GAMEDATA.map((data, index) => (
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
