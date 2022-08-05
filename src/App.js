import { useSelector } from "react-redux";
import { Route, Routes , Outlet} from "react-router-dom";

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

  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <AppWrapper>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:invoiceId' element={<InvoiceViewer />} />
          <Route path='/auth' element={<Authentication />} />
        </Routes>
        <Outlet/>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
