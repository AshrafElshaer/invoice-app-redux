import { useSelector } from "react-redux";
import { Route, Routes, useNavigate  , Outlet} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/variables.styles";
import { selectTheme } from "./features/ui/ui.selectors";
import { selectUser } from "./features/user/user.selectors";

import GlobalStyles from "./styles/golobalStyles";
import Aside from "./components/aside/Aside";
import Authentication from "./routes/authentication/Authentication";

import { AppWrapper } from "./app.styles";
import Home from "./routes/home/Home";
import InvoiceViewer from "./routes/invoice-viewer/InvoiceViewer";
const App = () => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <AppWrapper>
        <Aside />
        <Routes>
          <Route index element={<Home />} />
          <Route path=':id' element={<InvoiceViewer />} />
          {/* {user ? (
            <Route index element={<Directory />} />
          ) : (
            <Route index element={<Authentication />} />
          )} */}
        </Routes>
        <Outlet/>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
