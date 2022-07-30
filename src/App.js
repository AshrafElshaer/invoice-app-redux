import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/variables.styles";
import { selectTheme } from "./features/ui/ui.selectors";
import { selectUser } from "./features/user/user.selectors";

import GlobalStyles from "./styles/golobalStyles";
import Aside from "./components/aside/Aside";
import Directory from "./routes/directory/Directory";
import Authentication from "./routes/authentication/Authentication";

import "./App.css";

const App = () => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <div className='app-wrapper'>
        <Aside />
        <Routes>
        <Route index element={<Directory />} />
          {/* {user ? (
            <Route index element={<Directory />} />
          ) : (
            <Route index element={<Authentication />} />
          )} */}
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
