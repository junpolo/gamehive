import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function GameList() {
  return (
    <Box>
      <Card sx={{ maxWidth: 250, padding: 1 }}>
        <CardActionArea>
          <Box>
            <CardMedia
              component="img"
              height="140"
              image="/images/game1.jpeg"
              alt="apex legends"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: "relative",
              bottom: 10,
              left: 10,
            }}
          >
            <Chip
              icon={
                <Avatar
                  alt="Natacha"
                  src="/images/game1_logo.jpeg"
                  sx={{
                    width: "13px",
                    height: "13px",
                  }}
                />
              }
              label="Apex Legends"
              variant="outlined"
              sx={{
                height: "18px",
                padding: "8px",
                paddingLeft: 0,
                backgroundColor: "white",
              }}
            />
          </Stack>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <img
        src="/images/game1_character.png"
        style={{
          width: "180px",
          height: "180px",
          position: "absolute",
          bottom: "74%",
          left: "120px",
        }}
      />
    </Box>
  );
}
