import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Slider,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  IndeterminateCheckBox,
  Cancel,
  Clear,
} from "@mui/icons-material";

import {
  defaultCover,
  gameCovers,
  gamesWithWhiteBackground,
  rows,
  tags,
} from "./data/catalog.data";
import { useGameCatalog } from "./hooks/game-catalog.hook";

export default function GameCatalogScene() {
  const {
    sliderValue,
    formGroupKey,
    selectedTags,
    tableKey,
    value,
    page,
    rowsPerPage,
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
  } = useGameCatalog(rows);

  return (
    <Grid container item xs={12} md={12} spacing={2}>
      <Grid item xs={12} md={9}>
        <Stack>
          <Typography
            variant={"h5"}
            fontWeight={"bold"}
            fontSize={"sans-serif"}
          >
            Game Catalogs
          </Typography>
          <Box mt={3}>
            {selectedTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={handleTagDelete(tag)}
                sx={{
                  marginRight: 1,
                  marginBottom: 1,
                  borderRadius: 0,
                }}
                deleteIcon={<Cancel sx={{ fontSize: "1px" }} />}
              />
            ))}
            <Box>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  sx={{ marginTop: 5 }}
                >
                  <Tab
                    label="2024"
                    disableRipple
                    value={2024}
                    sx={{ fontSize: "14px" }}
                  />
                  <Tab
                    label="2023"
                    disableRipple
                    value={2023}
                    sx={{ fontSize: "14px" }}
                  />
                  <Tab
                    label="2022"
                    disableRipple
                    value={2022}
                    sx={{ fontSize: "14px" }}
                  />
                </Tabs>
              </Box>
            </Box>
          </Box>
          <TableContainer
            component={Box}
            sx={{ p: 1, background: "transparent" }}
          >
            <Table
              key={tableKey}
              sx={{
                minWidth: 650,
                borderCollapse: "separate",
                borderSpacing: "0px 4px",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "none" }}>Name</TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    Release
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    Ratings
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      background: "#060c18",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        border: "none",
                        display: "flex",
                        gap: 1,
                        padding: 0,
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={gameCovers[row.name] || defaultCover}
                        width={"110px"}
                        height={"55px"}
                        style={{
                          backgroundColor: gamesWithWhiteBackground.includes(
                            row.name
                          )
                            ? "white"
                            : "transparent",
                        }}
                      />
                      <Box display={"flex"} flexDirection={"column"}>
                        <Typography variant={"caption"} fontSize={"14px"}>
                          {row.name}
                        </Typography>
                        <Box display={"flex"} flexDirection={"row"} gap={"5px"}>
                          <img src="/images/windows.svg" width={"19px"} />
                          <img
                            src="/images/apple.png"
                            width={"14px"}
                            height={"18px"}
                          />
                          <img src="/images/steam.png" width={"20px"} />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left" sx={{ border: "none", padding: 0 }}>
                      <Typography variant={"caption"} fontSize={"14px"}>
                        {row.release}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ border: "none", padding: 0 }}>
                      {parseInt(row.ratings) > 90 ? (
                        <ArrowUpward
                          sx={{
                            fontSize: "10px",
                            color: "lime",
                            marginRight: 1,
                          }}
                        />
                      ) : parseInt(row.ratings) >= 80 ? (
                        <IndeterminateCheckBox
                          sx={{
                            fontSize: "10px",
                            color: "orange",
                            marginRight: 1,
                          }}
                        />
                      ) : (
                        <ArrowDownward
                          sx={{
                            fontSize: "10px",
                            color: "red",
                            marginRight: 1,
                          }}
                        />
                      )}
                      <Typography variant={"caption"} fontSize={"14px"}>
                        {row.ratings}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ border: "none" }}>
                      <Typography variant={"caption"} fontSize={"14px"}>
                        {row.price}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 25]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack marginTop={21.3}>
          <Box>
            <TextField
              size="small"
              placeholder="Search Games"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              InputProps={{
                endAdornment: inputValue && (
                  <IconButton size="small" onClick={handleClearInput}>
                    <Clear sx={{ fontSize: "18px" }} />
                  </IconButton>
                ),
              }}
              sx={{
                width: "100%",
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              border: 1,
              height: 100,
              marginTop: 2,
              borderColor: "#4d5055",
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                paddingLeft: 1,
                borderColor: "#4d5055",
                backgroundColor: "#4d5055",
              }}
            >
              <Typography variant="caption" fontSize={"14px"}>
                Narrow by Price
              </Typography>
            </Box>
            <Stack paddingLeft={2} paddingRight={2}>
              <Slider
                max={50}
                min={0}
                size="medium"
                value={sliderValue}
                onChange={handleSliderChange}
                valueLabelDisplay="off"
                valueLabelFormat={(x) => `$${x * 50}`}
              />
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography variant={"caption"} fontSize={"12"}>
                  Any Price: ${sliderValue * 50}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ border: 1, marginTop: 3, borderColor: "#4d5055" }}>
            <Box
              sx={{
                borderBottom: 1,
                paddingLeft: 1,
                borderColor: "#4d5055",
                backgroundColor: "#4d5055",
              }}
            >
              <Typography variant="caption" fontSize={"14px"}>
                Narrow by Tag
              </Typography>
            </Box>
            <FormGroup key={formGroupKey} sx={{ marginLeft: 1 }}>
              {tags.map((tag: string, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      size="small"
                      name={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={handleTagChange}
                    />
                  }
                  label={
                    <Typography variant="body1" style={{ fontSize: "14px" }}>
                      {tag}
                    </Typography>
                  }
                />
              ))}
            </FormGroup>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
