import HomeHeader from "../../components/home-header/HomeHedaer";
import InvoicesList from "../../components/invoices-list/InvoicesList";
import { Container } from "../../styles/golobalStyles";

const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <InvoicesList />
    </Container>
  );
};

export default Home;
