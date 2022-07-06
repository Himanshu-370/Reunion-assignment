import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#089fb6", fontWeight: "900" }}
          >
            Estatery
          </Typography>
          <Button
            sx={{
              color: "#089fb6",
              fontWeight: "700",
              border: "solid 2px #089fb6",
            }}
            color="inherit"
          >
            Rent
          </Button>
          <Button
            sx={{
              color: "#089fb6",
              fontWeight: "700",
              border: "solid 2px #089fb6",
              margin: "0 7px",
            }}
            color="inherit"
          >
            Buy
          </Button>
          <Button
            sx={{
              color: "#089fb6",
              fontWeight: "700",
              border: "solid 2px #089fb6",
            }}
            color="inherit"
          >
            Sell
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
