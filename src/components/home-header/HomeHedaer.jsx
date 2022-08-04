import { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectFilterStatus,
  selectInvoicesCount,
} from "../../features/invoices/invoces.selector";

import IMAGES from "../../assets/images";
import Button from "../../components/button/Button";
import FilterDropdown from "../../components/filter-dropdown/FilterDropdown";

import {
  HeaderContaienr,
  Title,
  InvoicesCount,
  TitleWrapper,
  DropdownContainer,
} from "./homeHeader.styles";

const HomeHeader = () => {
  const { iconArrowDown, iconPlus } = IMAGES;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleDropdown = () => setIsFilterOpen(!isFilterOpen);

  const invoicesCount = useSelector(selectInvoicesCount);
  const filterStatus = useSelector(selectFilterStatus);

  return (
    <HeaderContaienr>
      <TitleWrapper>
        <Title>Invoices</Title>
        {invoicesCount ? (
          <InvoicesCount>
            There are {invoicesCount} {filterStatus} invoices
          </InvoicesCount>
        ) : (
          <InvoicesCount>No Invoices</InvoicesCount>
        )}
      </TitleWrapper>

      <DropdownContainer>
        <Button onClick={toggleDropdown}>
          Filter by status
          <img
            src={iconArrowDown}
            alt='icon Arrow'
            style={{ rotate: isFilterOpen && "180deg" }}
          />
        </Button>
        {isFilterOpen && <FilterDropdown setIsFilterOpen={setIsFilterOpen} />}
      </DropdownContainer>

      <Button buttonType='purple'>
        <img src={iconPlus} alt='icon Plus' />
        New Invoice
      </Button>
    </HeaderContaienr>
  );
};

export default HomeHeader;
