import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const Slider = React.lazy(() => import("react-slick"));

export const FeatureGames = () => {
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const hiveBackground =
    "https://cdn.pixabay.com/photo/2012/04/18/16/09/beehive-37436_1280.png";

  const data = [
    {
      header: "New Release",
      title: "Counter Strike Global Offensive",
      subTitle:
        "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.",
      image: "https://images8.alphacoders.com/132/1329760.jpeg",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/CSGO-Emblem.png",
    },
    {
      header: "Upcoming",
      title: "Grand Theft Auto VI",
      subTitle:
        "Grand Theft Auto VI is a 2030 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2013's Grand Theft Auto IV, and the fifteenth instalment overall. ",
      image:
        "https://ilg.lxgindia.com/esports-arena-league/elements/dota2-character.png",
    },
    {
      header: "Upcoming",
      title: "Grand Theft Auto VI",
      subTitle:
        "Grand Theft Auto VI is a 2030 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2013's Grand Theft Auto IV, and the fifteenth instalment overall. ",
      image:
        "https://ilg.lxgindia.com/esports-arena-league/elements/dota2-character.png",
    },
  ];
  return (
    <React.Suspense>
      <Paper
        sx={{
          padding: 5,
          borderRadius: 3,
          position: "relative",
          overflow: "visible",
          backgroundImage:
            " linear-gradient(89deg, #ffc100 0%, #ff8542 112% 112%)",
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
        <Slider {...sliderSettings}>
          {data.map((slide, index) => (
            <Stack key={index}>
              <Box
                width={{ md: "80%", xs: "100%" }}
                sx={{
                  backgroundImage: slide.image,
                }}
              >
                <Typography variant="body2" fontWeight={550} color={"#5d5b5b"}>
                  {slide.header}
                </Typography>
                <Typography variant="h6" fontWeight={700} color={"black"}>
                  {slide.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  pt={2}
                  fontWeight={500}
                  fontSize={11.5}
                  color={"black"}
                >
                  {slide.subTitle}
                </Typography>
                <Box
                  display={"flex"}
                  mt={1}
                  gap={1}
                  pt={1}
                  width={{ md: "50%", xs: "100%" }}
                  justifyContent={{ md: "start", xs: "space-between" }}
                  alignItems={"center"}
                  padding={{ md: 0.5, xs: 1 }}
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
                </Box>
              </Box>
            </Stack>
          ))}
        </Slider>
      </Paper>
    </React.Suspense>
  );
};
