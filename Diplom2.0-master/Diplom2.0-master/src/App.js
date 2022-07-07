import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Calculate from "./pages/Calculate";
import Navigation from "./layout/Navigation";
import { APP_LINK } from "./constants/general";
import Faq from "./pages/Faq";
import Training from "./pages/Training";
import Videos from "./pages/Videos";
import Layout from "./components/layout/layout";

function App() {
  const getElement = (element) => {
    return <Layout>{element}</Layout>;
  };
  return (
    <>
      <CssBaseline />
      <div className="Font">
        <Navigation />
        <Router>
          <Routes>
            <Route
              path={APP_LINK.CALCULATE}
              element={getElement(<Calculate />)}
            />
            <Route path={APP_LINK.FAQ} element={getElement(<Faq />)} />
            <Route path={APP_LINK.WORKOUT} element={getElement(<Training />)} />
            <Route path={APP_LINK.VIDEOS} element={getElement(<Videos />)} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
