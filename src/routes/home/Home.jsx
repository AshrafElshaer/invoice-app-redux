import HomeHeader from "../../components/home-header/HomeHedaer";
import InvoicesList from "../../components/invoices-list/InvoicesList";

import { HomeContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>

      <HomeHeader />
      <InvoicesList />
      
    </HomeContainer>
  );
};

export default Home;
