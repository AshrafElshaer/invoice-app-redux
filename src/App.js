import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/variables.styles";
import { selectTheme } from "./features/ui/ui.selectors";

import GlobalStyles from "./styles/golobalStyles";
import Aside from "./components/aside/Aside";
import Authentication from "./routes/authentication/Authentication";
import InvoiceViewer from "./routes/invoice-viewer/InvoiceViewer";

import { AppWrapper } from "./app.styles";
import Home from "./routes/home/Home";
import NoMatch from "./components/NoMatch";
import { onAuthChange } from "./utils/firebase/firebase.utils";
import { loginUser } from "./features/user/userSlice";
import { fetchInvoices } from "./features/invoices/invoicesSlice";

const App = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        dispatch(loginUser(user));
        dispatch(fetchInvoices(user.uid));

      } else navigate("/auth");
    });
    return unsubscribe;
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
