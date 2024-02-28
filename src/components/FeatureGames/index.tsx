import {
  Box,
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

import "./featured.scss";
import { useGetSliderConfig } from "./hooks/use-get-slider-config.hook";

export const FeatureGames = () => {
  const { data, Slider, sliderSettings } = useGetSliderConfig();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      sx={{
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        boxShadow: 2,
        backgroundColor: "transparent",
      }}
    >
      <Slider {...sliderSettings}>
        {data.map((slide, index) => (
          <Stack key={index} position={"relative"} overflow={"visible"}>
            <Box key={index} height={300}>
              <video
                loop
                poster={slide.image}
                autoPlay
                controls
                muted
                onError={(e) => console.error("Video Error", e)}
                onLoadedData={() => console.log("Video is ready to play")}
                style={{
                  position: "absolute",
                  zIndex: -1,
                  width: "100%",
                  height: isMobile ? "60%" : "100%",
                  objectFit: isMobile ? "contain" : "fill",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  top: 0,
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            </Box>
            <Box
              textAlign={"justify"}
              padding={3}
              gap={{ xs: 1 }}
              sx={{
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box width={{ xs: "100%", md: "65%" }}>
                <Typography
                  variant="body2"
                  fontWeight={550}
                  color={"text.primary"}
                >
                  {slide.header}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  color={theme.palette.primary.dark}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  pt={2}
                  fontWeight={500}
                  fontSize={12}
                >
                  {slide.subTitle}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                gap={1}
                justifyContent={{ md: "center", xs: "space-between" }}
                alignItems={"center"}
                width={"35%"}
              >
                <Typography variant="h4" fontWeight={600}>
                  Play
                </Typography>
                <IconButton color="primary" sx={{ padding: 0 }}>
                  <PlayCircleIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
            </Box>
          </Stack>
        ))}
      </Slider>
    </Paper>
  );
};
