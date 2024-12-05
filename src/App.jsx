import React from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { useTheme } from "./theme/ThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ textAlign: "center", margin: "1rem" }}>
        <Button variant="contained" onClick={toggleTheme}>
          Переключиться на {isDarkMode ? "Светлую" : "Темную"} тему
        </Button>
      </div>
      <Form />
    </>
  );
}

export default App;
