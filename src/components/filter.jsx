import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Filter({ data, setData }) {
  const [location, setLocation] = React.useState("All");
  const [BHK, setBHK] = React.useState("All");
  const [price, setPrice] = React.useState("All");
  const [type, setType] = React.useState("All");

  //   const [search, setSearch] = React.useState("");

  const handlelocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handlebhkChange = (event) => {
    setBHK(event.target.value);
  };
  const handlepriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handletypeChange = (event) => {
    setType(event.target.value);
  };

  const priceRe = /\$(.*)\/month/;

  const handleSearch = React.useCallback((event) => {
    let filteredData = data;

    if (location !== "All") {
        filteredData = filteredData.filter((el) => el.location === location);
    }

    if (BHK !== "All") {
        filteredData = filteredData.filter((el) => el.bhk === BHK);
    }

    if (price != "All") {
        const split = price.split("-");
        const lowerBound = Number(split[0]);
        const upperBound = Number(split[1]);

        filteredData = filteredData.filter((el) => {
            // "$3,050/month"
            const [_, match] = el.price.match(priceRe);
            const dataPrice = Number(match.replace(",", ""));

            return dataPrice >= lowerBound && dataPrice < upperBound;
        });
    }

    if (type !== "All") {
        filteredData = filteredData.filter((el) => el.type === type);
    }

    setData(filteredData);
  }, [location, BHK, type, price]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            spacing={4}
            columns={17}
            sx={{ bgcolor: "transparent" }}
          >
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Location"
                  onChange={handlelocationChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="New York, USA">New York, USA</MenuItem>
                  <MenuItem value="Chicago, USA">Chicago, USA</MenuItem>
                  <MenuItem value="Washington, USA">Washington, USA</MenuItem>
                  <MenuItem value="Boston, USA">Boston, USA</MenuItem>
                  <MenuItem value="Las Vegas, USA">Las Vegas, USA</MenuItem>
                  <MenuItem value="Virginia, USA">Virginia, USA</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">BHK</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={BHK}
                  label="BHK"
                  onChange={handlebhkChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="+1 BHK">1 BHK</MenuItem>
                  <MenuItem value="+2 BHK">2 BHK</MenuItem>
                  <MenuItem value="+3 BHK">3 BHK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price}
                  label="Price"
                  onChange={handlepriceChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="2000-2800">$2,000 - $2,800</MenuItem>
                  <MenuItem value="2900-3800">$2,900 - $3,800</MenuItem>
                  <MenuItem value="3900-4500">$3,900 - $4,500</MenuItem>
                  <MenuItem value="4500-10000000">$4,500 and above</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Property Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={handletypeChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Houses">Houses</MenuItem>
                  <MenuItem value="Apartments">Apartments</MenuItem>
                  <MenuItem value="Townhomes">Townhomes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Button
                sx={{
                  color: "#089fb6",
                  fontWeight: "700",
                  border: "solid 2px #089fb6",
                  marginTop: "6px",
                }}
                color="inherit"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
