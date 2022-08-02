import { useState } from "react";
import IMAGES from "../../assets/images";
import Button from "../../components/button/Button";
import FilterDropdown from "../../components/filter-dropdown/FilterDropdown";

import {
  HeaderWrapper,
  Title,
  InvoicesCount,
  TitleContainer,
  DropdownContainer,
} from "./homeHeader.styles";

const HomeHeader = () => {
  const { iconArrowDown, iconPlus } = IMAGES;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleDropdown = () => setIsFilterOpen(!isFilterOpen);

  return (
    <HeaderWrapper>
      <TitleContainer>
        <Title>Invoices</Title>
        <InvoicesCount>There are 7 total invoices</InvoicesCount>
      </TitleContainer>

      <DropdownContainer>
        <Button onClick={toggleDropdown}>
          Filter by status
          <img
            src={iconArrowDown}
            alt='icon Arrow'
            style={{ rotate: isFilterOpen && "180deg" }}
          />
        </Button>
        {isFilterOpen && <FilterDropdown />}
      </DropdownContainer>

      <Button buttonType='purple'>
        <img src={iconPlus} alt='icon Plus' />
        New Invoice
      </Button>
    </HeaderWrapper>
  );
};

export default HomeHeader;
