import {
  Chip,
  Grid,
  IconButton,
  Paper,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeatureGames = () => {
  const theme = useTheme();

  const hiveBackground =
    "https://cdn.pixabay.com/photo/2012/04/18/16/09/beehive-37436_1280.png";

  const data = [
    {
      header: "New Release",
      title: "Counter Strike Global Offensive",
      subTitle:
        "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.",
      image:
        "https://www.pikpng.com/pngl/b/68-687117_clip-art-csgo-character-png-british-sas-special.png",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/CSGO-Emblem.png",
    },
    // {
    //   title: "5000 monthly for each game we have!",
    //   subTitle:
    //     " The first 300 players from the Paid leaderboards and the first 200 from the free",
    //   image:
    //     "https://ilg.lxgindia.com/esports-arena-league/elements/dota2-character.png",
    // },
  ];
  return (
    <Grid container>
      <Paper
        sx={{
          padding: 5,
          display: "flex",
          flexDirection: "row",
          borderRadius: 3,
          position: "relative",
          backgroundImage:
            " linear-gradient(89deg, #ffc100 0%, #ff8542 112% 112%)",
          width: "100%",
          boxShadow: 10,
        }}
      >
        <Chip
          variant="filled"
          color="warning"
          label={
            <Typography variant="caption" fontWeight={600}>
              Announcement
            </Typography>
          }
          sx={{
            position: "absolute",
            top: -15,
            boxShadow: 10,
            padding: 2.2,
          }}
        />

        {data.map((slide, index) => (
          <Grid container key={index} gap={5}>
            <Grid width={"65%"}>
              <Typography variant="body2" fontWeight={550} color={"#5d5b5b"}>
                {slide.header}
              </Typography>
              <Grid item display={"flex"} gap={1}>
                <Typography variant="h6" fontWeight={700} color={"black"}>
                  {slide.title}
                </Typography>
              </Grid>
              <Typography
                variant="subtitle2"
                pt={2}
                fontWeight={500}
                fontSize={11.5}
                color={"black"}
              >
                {slide.subTitle}
              </Typography>
              <Grid
                item
                display={"flex"}
                mt={1}
                gap={1}
                border={1}
                borderRadius={2}
                width={"40%"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={0.5}
              >
                <Typography fontSize={13} fontWeight={600} color={"black"}>
                  Play Trailer
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="add an alarm"
                  sx={{ padding: 0 }}
                >
                  <PlayCircleIcon color="success" />
                </IconButton>
              </Grid>
            </Grid>

            <img
              style={{
                width: "70%",
                height: "95%",
                position: "absolute",
                bottom: 0,
                right: 22,
                opacity: "15%",
              }}
              src={hiveBackground}
              className="img"
            />

            <Slide direction="up" in timeout={1000}>
              <img
                style={{
                  height: 300,
                  width: 300,
                  position: "absolute",
                  bottom: 0,
                  right: -40,
                }}
                src={slide.image}
                className="img"
              />
            </Slide>
          </Grid>
        ))}
      </Paper>
    </Grid>
  );
};
