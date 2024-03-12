import { ColourModeContext, useMode } from './theme.js';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import LocationContextProvider from './state/locationContext.jsx'

import './index.css'

import Hero from "./pages/Hero.jsx";
import Character from "./pages/Character.jsx"
import Combat from "./pages/Combat.jsx";
import Dao from "./pages/Dao.jsx";
import Exploration from "./pages/Exploration.jsx";
import TrainingSkills from "./pages/TrainingSkills.jsx";
import TrainingPhysical from "./pages/TrainingPhysical.jsx";
import TrainingEnergy from "./pages/TrainingEnergy.jsx";
import Storage from "./pages/Storage.jsx";
import Settings from "./pages/Settings.jsx"

import Header from "./global/Header.jsx";
import Footer from "./global/Footer.jsx";


function App() {
  const [theme, colourMode] = useMode();

  return (
  // <LocationContextProvider>
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="App">
            <Header fixed="top" />
            <div className="content">
              <Routes>
                <Route path="*" element={<Hero />} />
                <Route path="/Character" element={<Character />} />
                <Route path="/Dao" element={<Dao />} />
                <Route path="/Combat" element={<Combat />} />
                <Route path="/Exploration" element={<Exploration />} />
                <Route path="/TrainingSkills" element={<TrainingSkills />} />
                <Route path="/TrainingPhysical" element={<TrainingPhysical />} />
                <Route path="/TrainingEnergy" element={<TrainingEnergy />} />
                <Route path="/Storage" element={<Storage />} />
                <Route path="/Settings" element={<Settings />} />
              </Routes>
            </div>
            <Footer fixed="bottom" />
          </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
    // </LocationContextProvider>
  );
}

export default App;