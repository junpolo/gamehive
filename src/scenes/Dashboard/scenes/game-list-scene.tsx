import { Box, Button, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import games from "../data/game-data";
import GameList from "@scenes/Dashboard/components/game-list.component";
import usePagination from "../hooks/use-pagination-hook";

const GameListScene = () => {
  const itemsPerPage = 4;
  const { nextPage, prevPage, currentItems, hasNextPage, hasPrevPage } =
    usePagination(games, itemsPerPage);

  return (
    <>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" fontWeight={600}>
          Trending
        </Typography>
        <Box>
          <Button onClick={prevPage} disabled={!hasPrevPage}>
            <ArrowBack />
          </Button>
          <Button onClick={nextPage} disabled={!hasNextPage}>
            <ArrowForward />
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        justifyContent={"flex-end"}
        alignItems={"stretch"}
        overflow={"auto"}
        width={"100%"}
        position={"relative"}
        className="scroll-box"
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={2}
          justifyContent={"flex-start"}
        >
          {currentItems.map((game) => (
            <GameList key={game.gameTitle} {...game} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default GameListScene;
