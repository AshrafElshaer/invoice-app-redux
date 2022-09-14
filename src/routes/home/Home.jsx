import { useSelector } from "react-redux";
import { selectfetchStatus } from "../../features/invoices/invoces.selector";
import HomeHeader from "../../components/home-header/HomeHedaer";
import InvoicesList from "../../components/invoices-list/InvoicesList";
import { Container } from "../../styles/golobalStyles";

const Home = () => {
  const invoiceFetchStatus = useSelector(selectfetchStatus);
  return (
    <Container>
      <HomeHeader />
      {invoiceFetchStatus === "pending" ? "loading..." : <InvoicesList />}
    </Container>
  );
};

export default Home;
