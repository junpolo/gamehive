import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

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
    logo: "https://seeklogo.com/images/D/dota-2-logo-C88DABB066-seeklogo.com.png",
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
    logo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/563/small_2x/destiny-logo-destiny-icon-transparent-free-png.png",
    developer: "Bungie Inc.",
  },
  {
    gameName: "Minecraft",
    peak: "9.1+",
    logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
    developer: "Mojang",
  },
  {
    gameName: "Starfield",
    peak: "9.1k+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Starfield_logo.svg",
    developer: "Bethesda",
  },
  {
    gameName: "Halo 4",
    peak: "9.0k+",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Halo-Logo.png",
    developer: "Bungie Inc.",
  },
  {
    gameName: "Rust",
    peak: "8.9k+",
    logo: "https://i.pinimg.com/originals/cc/40/6a/cc406a8382d8df7eb5f395ec884d3c95.png",
    developer: "Unity",
  },
  {
    gameName: "CSGO",
    peak: "8.9k+",
    logo: "https://preview.redd.it/1s0j5e4fhws01.png?auto=webp&s=af1a17c3f935e22d1cbf6aecc983d8626c15b590",
    developer: "Valve",
  },
  {
    gameName: "PUBG: BATTLEGROUND",
    peak: "8.8k+",
    logo: "https://militarygamingleague.com/wp-content/uploads/pubg-png-pubg-logo-png-pubg-logo-43-min.png",
    developer: "PUBG Corp.",
  },
  {
    gameName: "Last Epoch",
    peak: "8.5k+",
    logo: "https://images.alphacoders.com/135/1352252.png",
    developer: "Eleventh Hour Games",
  },
];

export const Leaderboard = () => {
  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "transparent",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} paddingBottom={2}>
        <Typography fontWeight={600}>Leaderboard</Typography>
        <Typography color={"gray"} variant="caption" fontWeight={500}>
          Most played games for this week.
        </Typography>
      </Box>
      <Stack
        sx={{
          overflow: "auto",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {GAMEDATA.map((data, index) => (
          <>
            <Box
              key={index}
              mb={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              pt={2}
            >
              <Box display={"flex"} gap={3}>
                <Box width={40} height={40}>
                  <img
                    style={{
                      height: 30,
                      marginRight: 15,
                      marginTop: 4,
                    }}
                    src={data.logo}
                    className="img"
                  />
                </Box>
                <Grid display={"flex"} flexDirection={"column"}>
                  <Typography variant="caption" fontWeight={600}>
                    {data.gameName}
                  </Typography>
                  <Typography variant="caption">{data.peak}</Typography>
                </Grid>
              </Box>
              <Grid>
                <Typography variant="caption" fontSize={12} fontWeight={500}>
                  {data.developer}
                </Typography>
              </Grid>
            </Box>
            <Divider />
          </>
        ))}
      </Stack>
    </Paper>
  );
};
