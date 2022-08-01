import IMAGES from "../../assets/images";
import Button from "../button/Button";

import {
  HomeWrapper,
  HeaderWrapper,
  Title,
  InvoicesCount,
  TitleContainer,
} from "./home.styles";

const Home = () => {
  const { iconArrowDown, iconPlus } = IMAGES;
  return (
    <HomeWrapper>
      <HeaderWrapper>
        <TitleContainer>
          <Title>Invoices</Title>
          <InvoicesCount>There are 7 total invoices</InvoicesCount>
        </TitleContainer>

        <Button>
          Filter by status <img src={iconArrowDown} alt='icon Arrow' />
        </Button>
        <Button buttonType='purple'>
          <img src={iconPlus} alt='icon Plus' />
          New Invoice
        </Button>
      </HeaderWrapper>
    </HomeWrapper>
  );
};

export default Home;
