import React from "react";
import "./Header.css";
import { TextField, ThemeProvider, MenuItem } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import categories from "../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleChange = (Language) => {
    setCategory(Language);
    setWord("")
  }
  return (
    <div className="header">
      <span className="title">{word ? word : "word hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            variant="standard"
          />
          <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Language"
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((options) => (
              <MenuItem key={options.label} value={options.label}>
                {options.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
