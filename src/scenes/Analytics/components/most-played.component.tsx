import {
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { green } from "@mui/material/colors";

import { mostPlayedGames } from "@core/data";

export const MostPlayed = () => {
  return (
    <Card>
      <CardHeader
        title="Most Played Games"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
      />
      <CardContent component={TableContainer}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell variant="head">Name</TableCell>
              <TableCell variant="head">Current</TableCell>
              <TableCell variant="head">24h Peak</TableCell>
              <TableCell variant="head">All-Time Peak</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {mostPlayedGames.map((game, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src={game.image}
                      alt={`${game.name} icon`}
                      width="100"
                    />
                    {game.name}
                  </Box>
                </TableCell>
                <TableCell sx={{ color: green[500] }}>
                  {game.currentPlayers.toLocaleString()}
                </TableCell>
                <TableCell>{game.firstDayPeak.toLocaleString()}</TableCell>
                <TableCell>{game.allTimePeak.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
