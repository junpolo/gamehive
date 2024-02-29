import { Box, Typography } from "@mui/material";

import { Summary } from "@components";

export const SummaryScene = () => (
  <Box>
    <Typography variant="h6" fontWeight={600} pb={2}>
      Dashboard
    </Typography>
    <Box
      display={"flex"}
      gap={{ xs: 2, md: 0 }}
      justifyContent={"space-between"}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Summary
        isIncreasing
        userCount="53,293"
        header="Total Page Views"
        increasedValue="59.3"
      />
      <Summary
        isIncreasing={false}
        userCount="23,178"
        header="Players Online"
        increasedValue="59.3"
      />
      <Summary
        isIncreasing
        userCount="45,367"
        header="Players in-game"
        increasedValue="59.3"
      />
    </Box>
  </Box>
);
