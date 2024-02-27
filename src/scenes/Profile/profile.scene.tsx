import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GoogleSVG from "/googe-icon.svg";
import DiscordSVG from "/discord-icon.svg";
import FacebookSVG from "/facebook-icon.svg";

type AccountsLinked = {
  name: string;
  icon: string;
  alt?: string;
};

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("lg"));

  const BADGES: AccountsLinked[] = [
    {
      name: "AWS God",
      icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png",
    },
    {
      name: "CSS God",
      icon: "https://images.credly.com/images/e5d4e5c3-7d37-42b5-a778-48dd0e5476c0/image.png",
    },
    {
      name: "React God",
      icon: "https://images.credly.com/images/7ef3bf1f-c010-411d-b48b-8a10104df329/image.png",
    },
    {
      name: "Agile Testing SME",
      icon: "https://images.credly.com/size/340x340/images/f0209e7a-2a8e-4a3b-88e8-f7a5c677e180/Agile_Testing_SME.png",
    },
    {
      name: "Junit testing SMP",
      icon: "https://images.credly.com/size/340x340/images/2d7b1118-da85-47e2-b9e5-580dfb547d5f/Junit_Testing_SMP.png",
    },
    {
      name: "Management Subject Matter",
      icon: "https://images.credly.com/size/340x340/images/c8ad8636-2edb-4650-8132-fc81eeac26a7/Rewards_Management_SME.png",
    },
    {
      name: "Management Subject Matter",
      icon: "https://images.credly.com/size/340x340/images/c8ad8636-2edb-4650-8132-fc81eeac26a7/Rewards_Management_SME.png",
    },
  ];

  const ACCOUNTS: AccountsLinked[] = [
    {
      name: "Google",
      icon: GoogleSVG,
      alt: "Google Icon",
    },
    {
      name: "Facebook",
      icon: FacebookSVG,
      alt: "Facebook icon",
    },
    {
      name: "Discord",
      icon: DiscordSVG,
      alt: "Discord Icon",
    },
  ];

  return (
    <Grid
      container
      pt={{ xs: 13 }}
      padding={4}
      justifyContent={"center"}
      spacing={2}
    >
      <Grid item md={6} xs={12}>
        <Stack gap={2}>
          <Typography variant="h5" fontWeight={600}>
            Profile
          </Typography>
          <Divider />
          <Paper
            sx={{
              marginTop: 1,
              padding: 3,
              display: "flex",
              gap: 3,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              display={"flex"}
              gap={4}
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <Box
                padding={1}
                sx={{
                  backgroundColor: `${theme.palette.primary.main}`,
                  borderRadius: 100,
                }}
                width={"fit-content"}
                height={"fit-content"}
              >
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  src="https://m.media-amazon.com/images/M/MV5BZjIwMzc0MDQtZjg0OC00MjRmLTgwZTItOWViYjdlMTRmYjQwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg"
                />
              </Box>
              <Stack
                justifyContent={"center"}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography variant="body1" fontWeight={600}>
                  Clevane Villareal
                </Typography>
                <Typography variant="caption" sx={{ color: "#A2A0A0" }}>
                  Administrator
                </Typography>
                <Typography variant="caption" sx={{ color: "#A2A0A0" }}>
                  Zone 10 Cugman Cagayan de Oro City
                </Typography>
                <Typography pt={2} variant="caption" sx={{ color: "#A2A0A0" }}>
                  All I wanna do is sweg
                </Typography>
              </Stack>
            </Box>
            <Button
              variant="outlined"
              sx={{ alignSelf: { md: "flex-start", xs: "center" } }}
            >
              Edit Profile
            </Button>
          </Paper>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />}>
              <Typography variant="caption" fontWeight={600}>
                Badges
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                className="scroll-box"
                sx={{
                  paddingTop: 0,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  overflow: "auto",
                  gap: 10,
                  WebkitOverflowScrolling: "touch",
                  "&::-webkit-scrollbar": {
                    display: !isMobile ? "none" : "auto",
                  },
                }}
              >
                {BADGES.map((badge, index) => (
                  <Box
                    key={index}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={1}
                    sx={{ flexShrink: 0 }}
                    width={"10%"}
                  >
                    <img
                      height={40}
                      width={40}
                      className="img"
                      src={badge.icon}
                    />
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      fontSize={10}
                    >
                      {badge.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />}>
              <Typography variant="caption" fontWeight={600}>
                Linked Accounts
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingTop: 0 }}>
              {ACCOUNTS.map((provider, index) => (
                <Box display={"flex"} alignItems={"center"}>
                  <Tooltip title={provider.name} key={index} placement="bottom">
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    >
                      <img
                        height="100%"
                        width="100%"
                        src={provider.icon}
                        alt={provider.alt}
                        className="img"
                      />
                    </IconButton>
                  </Tooltip>
                  <Typography variant="caption">{provider.name}</Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Paper sx={{ padding: 3 }}>
            <Stack gap={1}>
              <Typography variant="caption" fontWeight={600} pb={2}>
                Contact Information
              </Typography>
              <Divider />
              <Typography variant="caption" pt={2}>
                <b>Email </b>: clevane@gamehive.com
              </Typography>
              <Typography variant="caption">
                <b>Second email </b>: clevane1999@gmail.com
              </Typography>
              <Typography variant="caption">
                <b>Mobile No. </b>: 09993681143
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Profile;
