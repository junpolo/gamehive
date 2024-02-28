import { useState } from 'react';

export type Row = {
  name: string;
  tag: string;
  release: string;
  ratings: string;
  price: number | string;
};

export function useGameCatalog(initialRows: Row[]) {
  const [sliderValue, setSliderValue] = useState(0);
  const [formGroupKey, setFormGroupKey] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tableKey, setTableKey] = useState(0);
  const [value, setValue] = useState(2024);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelectedYear(newValue);
    setPage(0);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
    setTableKey((prevKey) => prevKey + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSliderChange = (
    _event: Event,
    newSliderValue: number | number[]
  ) => {
    if (typeof newSliderValue === "number") {
      setSliderValue(newSliderValue);
    }
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    setSelectedTags((prevTags: string[]) => {
      if (checked) {
        return prevTags.includes(name) ? prevTags : [...prevTags, name];
      } else {
        return prevTags.filter((tag: string) => tag !== name);
      }
    });
    setFormGroupKey((prevKey) => prevKey + 1);
  };

  const handleTagDelete = (tagToDelete: string) => () => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToDelete)
    );
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const filteredRows = initialRows.filter(
    (row: Row) =>
      row.release.includes(selectedYear.toString()) &&
      (selectedTags.length === 0 || selectedTags.includes(row.tag)) &&
      (sliderValue === 0 ||
        parseFloat(row.price.toString().substring(1)) <= sliderValue * 50) &&
      row.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return {
    sliderValue,
    setSliderValue,
    formGroupKey,
    setFormGroupKey,
    selectedTags,
    setSelectedTags,
    tableKey,
    setTableKey,
    value,
    setValue,
    selectedYear,
    setSelectedYear,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    inputValue,
    setInputValue,
    handleChange,
    handleChangePage,
    handleChangeRowsPerPage,
    handleSliderChange,
    handleTagChange,
    handleTagDelete,
    handleClearInput,
    filteredRows,
    paginatedRows,
  };
}
