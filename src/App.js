import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/variables.styles";
import { selectTheme } from "./features/ui/ui.selectors";
import { selectUser } from "./features/user/user.selectors";

import GlobalStyles from "./styles/golobalStyles";
import Aside from "./components/aside/Aside";
import Authentication from "./routes/authentication/Authentication";
import InvoiceViewer from "./routes/invoice-viewer/InvoiceViewer";

import { AppWrapper } from "./app.styles";
import Home from "./routes/home/Home";
import NoMatch from "./components/NoMatch";

const App = () => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/auth");
  }, []);

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <AppWrapper>
        <Aside />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='auth/*' element={<Authentication />} />
          <Route path=':invoiceId' element={<InvoiceViewer />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
