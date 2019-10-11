import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import CustomUseStateEffectAxios from "./hooks/CustomUseStateEffectAxios";

import "./styles.scss";

const App = () => {
  const [coinData] = CustomUseStateEffectAxios();
  const [dark, setDark] = useDarkMode();


  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <Navbar dark={dark} setDark={setDark} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);