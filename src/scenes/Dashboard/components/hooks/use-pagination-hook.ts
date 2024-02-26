import React from "react";

export interface Game {
  gameTitle: string;
}

const usePagination = (totalItems: Game[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    nextPage,
    prevPage,
    currentItems,
    hasNextPage: indexOfLastItem < totalItems.length,
    hasPrevPage: currentPage > 1,
  };
};

export default usePagination;
