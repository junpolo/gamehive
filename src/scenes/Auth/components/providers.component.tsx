import { Stack, IconButton, Tooltip } from "@mui/material";

import GoogleSVG from "/googe-icon.svg";
import DiscordSVG from "/discord-icon.svg";
import FacebookSVG from "/facebook-icon.svg";

type AuthProviders = {
  name: string;
  icon: string;
  alt: string;
};

const PROVIDERS: AuthProviders[] = [
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

export const Providers = () => {
  return (
    <Stack gap={2} direction="row" justifyContent="center" marginTop={-2}>
      {PROVIDERS.map((provider, index) => (
        <Tooltip title={provider.name} key={index} placement="bottom">
          <IconButton
            sx={{
              width: 48,
              height: 48,
            }}
          >
            <img
              height="100%"
              width="100%"
              src={provider.icon}
              alt={provider.alt}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};
