import React from "react";
import { Box, Chip, IconButton, Paper, Stack, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGetSliderConfig } from "./hooks/use-get-slider-config.hook";

export const FeatureGames = () => {
  const { data, Slider, sliderSettings } = useGetSliderConfig();
  return (
    <React.Suspense>
      <Paper
        sx={{
          padding: 5,
          borderRadius: 3,
          position: "relative",
          overflow: "visible",
          // [oc] backgroundImage:
          // [oc]   " linear-gradient(89deg, #ffc100 0%, #ff8542 112% 112%)",
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
                <Typography variant="body2" fontWeight={550} color={"#c9c2c2"}>
                  {slide.header}
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {slide.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  pt={2}
                  fontWeight={500}
                  fontSize={11.5}
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
                  <Typography fontSize={13} fontWeight={600}>
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
