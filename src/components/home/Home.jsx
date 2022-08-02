import { useState } from "react";
import IMAGES from "../../assets/images";
import Button from "../button/Button";
import FilterDropdown from "../filter-dropdown/FilterDropdown";

import {
  HomeWrapper,
  HeaderWrapper,
  Title,
  InvoicesCount,
  TitleContainer,
} from "./home.styles";

const Home = () => {
  const { iconArrowDown, iconPlus } = IMAGES;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleDropdown = () => setIsFilterOpen(!isFilterOpen);

  return (
    <HomeWrapper>
      <HeaderWrapper>
        <TitleContainer>
          <Title>Invoices</Title>
          <InvoicesCount>There are 7 total invoices</InvoicesCount>
        </TitleContainer>

        <div className='dropdown-container'>
          <Button onClick={toggleDropdown}>
            Filter by status
            <img
              src={iconArrowDown}
              alt='icon Arrow'
              style={{ rotate: isFilterOpen && "180deg" }}
            />
          </Button>
          {isFilterOpen && <FilterDropdown />}
        </div>
        <Button buttonType='purple'>
          <img src={iconPlus} alt='icon Plus' />
          New Invoice
        </Button>
      </HeaderWrapper>
    </HomeWrapper>
  );
};

export default Home;
