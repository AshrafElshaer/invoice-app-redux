import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, selectIsFormOpen } from "../../features/ui/ui.selectors";
import { toggleTheme } from "../../features/ui/uiSilce";

import IMAGES from "../../assets/images";
import { AsideBarWrapper, Logo, ToggleSwitch, Profile } from "./aside.styles";
import InvoiceForm from "../invoice-form/InvoiceForm";

const Aside = () => {
  const { logo, avatar, iconMoon, iconSun } = IMAGES;
  const theme = useSelector(selectTheme);
  const isFormOpen = useSelector(selectIsFormOpen);

  const dipacth = useDispatch();

  const handleToggle = () => {
    dipacth(toggleTheme());
  };

  return (
    <>
      <AsideBarWrapper>
        <Logo src={logo} alt='logo' />
        <ToggleSwitch
          src={theme === "darkTheme" ? iconSun : iconMoon}
          alt='theme toggle'
          onClick={handleToggle}
        />
        <Profile src={avatar} alt='profile' />
      </AsideBarWrapper>
      {/* {isFormOpen && <InvoiceForm />} */}

      <Outlet />
    </>
  );
};

export default Aside;
