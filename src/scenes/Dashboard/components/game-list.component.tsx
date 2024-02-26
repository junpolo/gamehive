import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grow,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  BrowserUpdated as BrowserUpdatedIcon,
  MilitaryTech as MilitaryTechIcon,
} from "@mui/icons-material";
import React from "react";

interface GameListProps {
  coverImage?: string;
  logoImage?: string;
  characterImage?: string;
  positionTop?: string | number;
  positionBottom?: string;
  positionLeft?: string;
  imageWidth?: string;
  imageHeight?: string;
  transformImage?: boolean;
  gameTitle?: string;
  timeoutAnimation?: number;
  gameAbout?: string;
}

const GameList = React.forwardRef<HTMLDivElement, GameListProps>(
  (
    {
      coverImage = "/images/cover1.jpeg",
      logoImage = "/images/logo1.jpeg",
      characterImage = "/images/character1.png",
      positionBottom = "",
      positionTop = "",
      positionLeft = "",
      imageHeight = "180px",
      imageWidth = "180px",
      transformImage = true,
      gameTitle = "",
      timeoutAnimation = 500,
      gameAbout = "Apex Legends is a team-based battle royale game with diverse characters boasting unique abilities.",
    },
    ref
  ) => {
    return (
      <Grow in timeout={timeoutAnimation}>
        <Box ref={ref} sx={{ position: "relative" }}>
          <Card
            sx={{
              width: 250,
              position: "relative",
              backgroundColor: "#0c131b",
            }}
          >
            <Box sx={{ padding: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={coverImage}
                alt="apex legends"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  position: "relative",
                }}
              />
            </Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                top: "130px",
                left: 18,
              }}
            >
              <Chip
                icon={
                  <Avatar
                    alt="Natacha"
                    src={logoImage}
                    sx={{
                      width: "13px",
                      height: "13px",
                    }}
                  />
                }
                label={
                  <Typography
                    variant="caption"
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                  >
                    {gameTitle}
                  </Typography>
                }
                variant="outlined"
                sx={{
                  backgroundColor: "#0c131b",
                  height: "18px",
                  padding: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="caption"
                component="div"
                fontWeight={"bold"}
                fontSize={"25px"}
              >
                About
              </Typography>
              <Typography
                color="text.secondary"
                variant="caption"
                fontFamily={"sans-serif"}
                fontSize={"12px"}
                textAlign={"justify"}
              >
                {gameAbout}
              </Typography>
            </CardContent>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px",
                paddingLeft: 2,
                paddingRight: 2,
                borderRadius: 0,
                backgroundColor: "#080e14",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography
                  variant="caption"
                  fontFamily={"sans-serif"}
                  fontSize={"12px"}
                >
                  Ratings
                </Typography>
                <Stack direction={"row"} gap={"2px"}>
                  <MilitaryTechIcon
                    sx={{ fontSize: "16px", color: "#ffc100" }}
                  />
                  <Typography
                    variant="caption"
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                  >
                    90%
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ alignItems: "center" }}>
                <Typography
                  variant="caption"
                  fontFamily={"sans-serif"}
                  fontSize={"12px"}
                >
                  Downloads
                </Typography>
                <Stack direction={"row"} gap={"2px"}>
                  <BrowserUpdatedIcon
                    sx={{ fontSize: "16px", color: "#ffc100" }}
                  />
                  <Typography
                    variant="caption"
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                  >
                    15M+
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <IconButton
                  aria-label="delete"
                  size="small"
                  sx={{ backgroundColor: "#FFC100" }}
                >
                  <ArrowForward fontSize="inherit" />
                </IconButton>
              </Stack>
            </Paper>
          </Card>
          <img
            src={characterImage}
            style={{
              width: imageWidth,
              height: imageHeight,
              position: "absolute",
              top: positionTop,
              bottom: positionBottom,
              left: positionLeft,
              transform: transformImage ? "scaleX(-1)" : "",
            }}
          />
        </Box>
      </Grow>
    );
  }
);

export default GameList;
