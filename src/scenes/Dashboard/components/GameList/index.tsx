import { Box, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import games from "./data/game-data";
import GameList from "@core/component/game-list.component";
import usePagination from "./hooks/use-pagination-hooks";

const GameListScene = () => {
  const itemsPerPage = 4;
  const { nextPage, prevPage, currentItems, hasNextPage, hasPrevPage } =
    usePagination(games, itemsPerPage);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"flex-end"}
      alignItems={"stretch"}
      overflow={"auto"}
      width={"100%"}
    >
      <Box mt={2}>
        <Button onClick={prevPage} disabled={!hasPrevPage}>
          <ArrowBack />
        </Button>
        <Button onClick={nextPage} disabled={!hasNextPage}>
          <ArrowForward />
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={{ xs: "flex-start", md: "center" }}
      >
        {currentItems.map((game) => (
          <GameList key={game.gameTitle} {...game} />
        ))}
      </Box>
    </Box>
  );
};

export default GameListScene;
