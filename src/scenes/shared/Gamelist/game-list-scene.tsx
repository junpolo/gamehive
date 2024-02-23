import { useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import GameList from "@/@core/component/game-list.component";
import games from "./hooks/game-data";

const GameListScene = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = games.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"flex-end"}
      alignItems={"stretch"}
      overflow={"auto"}
      width={{ xs: "100%", md: "62%" }}
    >
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 2,
        }}
      >
        <Button onClick={prevPage} disabled={currentPage === 1}>
          <ArrowBack />
        </Button>
        <Button onClick={nextPage} disabled={indexOfLastItem >= games.length}>
          <ArrowForward />
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={"flex-start"}
      >
        {currentGames.map((game) => (
          <GameList key={game.gameTitle} {...game} />
        ))}
      </Box>
    </Box>
  );
};

export default GameListScene;
