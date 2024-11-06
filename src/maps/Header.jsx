import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export default function Header({ minMag, setMinMag, timespan, setTimespan }) {
  const [selectedMag, setSelectedMag] = useState("significant");
  const [selectedTime, setSelectedTime] = useState("day");

  function onMagnitudeSelect(value) {
    setMinMag(value);
    setSelectedMag(value);
  }

  function onTimeSelect(value) {
    setTimespan(value);
    setSelectedTime(value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#000000" }}>
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            USGS Earthquakes
          </Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              value="all"
              onClick={(event) => {
                onMagnitudeSelect(event.target.value);
              }}
              color={selectedMag === "all" ? "secondary" : "primary"}
            >
              ALL
            </Button>
            <Button
              value="1.0"
              onClick={(event) => {
                onMagnitudeSelect(event.target.value);
              }}
              color={selectedMag === "1.0" ? "secondary" : "primary"}
            >
              1.0+
            </Button>
            <Button
              value="2.5"
              onClick={(event) => {
                onMagnitudeSelect(event.target.value);
              }}
              color={selectedMag === "2.5" ? "secondary" : "primary"}
            >
              2.5+
            </Button>
            <Button
              value="4.5"
              onClick={(event) => {
                onMagnitudeSelect(event.target.value);
              }}
              color={selectedMag === "4.5" ? "secondary" : "primary"}
            >
              4.5+
            </Button>
            <Button
              value="significant"
              onClick={(event) => {
                onMagnitudeSelect(event.target.value);
              }}
              color={selectedMag === "significant" ? "secondary" : "primary"}
            >
              SIGNIFICANT
            </Button>
          </ButtonGroup>

          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              value="hour"
              onClick={(event) => {
                onTimeSelect(event.target.value);
              }}
              color={selectedTime === "hour" ? "secondary" : "primary"}
            >
              LAST HOUR
            </Button>
            <Button
              value="day"
              onClick={(event) => {
                onTimeSelect(event.target.value);
              }}
              color={selectedTime === "day" ? "secondary" : "primary"}
            >
              LAST DAY
            </Button>
            <Button
              value="week"
              onClick={(event) => {
                onTimeSelect(event.target.value);
              }}
              color={selectedTime === "week" ? "secondary" : "primary"}
            >
              LAST WEEK
            </Button>
            <Button
              value="month"
              onClick={(event) => {
                onTimeSelect(event.target.value);
              }}
              color={selectedTime === "month" ? "secondary" : "primary"}
            >
              LAST MONTH
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
