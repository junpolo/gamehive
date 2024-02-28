import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { TrendingUp, TrendingDown, People } from "@mui/icons-material";

export const Summary = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={600}>
        Dashboard
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 0 }}
      >
        <Card
          sx={{
            padding: 1,
            borderRadius: 3,

            backgroundColor: "transparent",
            width: { md: "31%" },
          }}
        >
          <CardContent>
            <Typography variant="caption" fontWeight={600} fontSize={15}>
              Total Page Views
            </Typography>
            <Box display={"flex"} gap={1} alignItems={"center"} mt={2} mb={3}>
              <People />
              <Typography variant="caption" fontSize={19}>
                53,293
              </Typography>
              <Chip
                sx={{ borderRadius: 1.5 }}
                size="small"
                icon={<TrendingUp />}
                label={
                  <Typography variant="caption" fontSize={12} fontWeight={600}>
                    59.3%
                  </Typography>
                }
                color="success"
              />
            </Box>
            <Typography
              variant="caption"
              fontWeight={500}
              fontSize={13}
              color="text.secondary"
            >
              You made an extra <b style={{ color: "#66bb6a" }}>36,000</b> this
              year
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            padding: 1,
            borderRadius: 3,
            backgroundColor: "transparent",
            width: { md: "31%" },
          }}
        >
          <CardContent>
            <Typography variant="caption" fontWeight={600} fontSize={15}>
              Players Online
            </Typography>
            <Box display={"flex"} gap={1} alignItems={"center"} mt={2} mb={3}>
              <People />
              <Typography variant="caption" fontSize={19}>
                2,365,456
              </Typography>
              <Chip
                sx={{ borderRadius: 1.5 }}
                size="small"
                icon={<TrendingDown />}
                label={
                  <Typography variant="caption" fontSize={12} fontWeight={600}>
                    26.5%
                  </Typography>
                }
                color="warning"
              />
            </Box>
            <Typography
              variant="caption"
              fontWeight={500}
              fontSize={13}
              color="text.secondary"
            >
              You made an extra <b style={{ color: "#ffa726" }}>18,000</b> this
              year
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            padding: 1,
            borderRadius: 3,
            backgroundColor: "transparent",
            width: { md: "31%" },
          }}
        >
          <CardContent>
            <Typography variant="caption" fontWeight={600} fontSize={15}>
              Players in-game
            </Typography>
            <Box display={"flex"} gap={1} alignItems={"center"} mt={2} mb={3}>
              <People />
              <Typography variant="caption" fontSize={19}>
                1,239,875
              </Typography>
              <Chip
                sx={{ borderRadius: 1.5 }}
                size="small"
                icon={<TrendingUp />}
                label={
                  <Typography variant="caption" fontSize={12} fontWeight={600}>
                    39.8%
                  </Typography>
                }
                color="success"
              />
            </Box>
            <Typography
              variant="caption"
              fontWeight={500}
              fontSize={13}
              color="text.secondary"
            >
              You made an extra <b style={{ color: "#66bb6a" }}>20,000</b> this
              year
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
