import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../features/ui/ui.selectors";
import { toggleTheme } from "../../features/ui/uiSilce";

import IMAGES from "../../assets/images";
import { AsideBarWrapper, Logo, ToggleSwitch, Profile } from "./aside.styles";

const Aside = () => {
  const { logo, avatar, iconMoon, iconSun } = IMAGES;
  const theme = useSelector(selectTheme);

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
    </>
  );
};

export default Aside;
