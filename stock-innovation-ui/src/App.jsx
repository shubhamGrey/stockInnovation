import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home Page/HomePage.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
