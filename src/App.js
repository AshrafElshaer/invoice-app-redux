import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/variables.styles";
import { selectTheme } from './features/ui/ui.selectors';
import GlobalStyles from "./styles/golobalStyles";

import './App.css';

const App = () => {
  const theme = useSelector(selectTheme)
  return (
    <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
      <GlobalStyles />
     
    </ThemeProvider>
  );
}

export default App;
