import { ColourModeContext, useMode } from './theme.js';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from 'react';
import location from './state/locationState.jsx'
// import PlanetContext from './state/planetState.jsx'

import './index.css'

import Hero from "./pages/Hero";
import Character from "./pages/Character.jsx"
import Combat from "./pages/Combat";
import Dao from "./pages/Dao";
import Exploration from "./pages/Exploration";
import TrainingSkills from "./pages/TrainingSkills";
import TrainingPhysical from "./pages/TrainingPhysical";
import TrainingEnergy from "./pages/TrainingEnergy";
import Storage from "./pages/Storage";
import Settings from "./pages/Settings.jsx"

import Header from "./global/Header";
import Footer from "./global/Footer";

const AppState = createContext();

function App() {
  const [theme, colourMode] = useMode();

  return (
  <AppState.Provider value={location}>
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
  </AppState.Provider>
  );
}

export default App;