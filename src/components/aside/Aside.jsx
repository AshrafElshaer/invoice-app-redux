import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTheme,
  selectIsNotificationOpen,
  selectNotificationMsg
} from "../../features/ui/ui.selectors";
import { closeNotification, toggleTheme } from "../../features/ui/uiSilce";


import IMAGES from "../../assets/images";
import Notification from "../notification model/Notification";

import { AsideBarWrapper, Logo, ToggleSwitch, Profile } from "./aside.styles";

const Aside = () => {
  const { logo, avatar, iconMoon, iconSun } = IMAGES;
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const isNotificationOpen = useSelector(selectIsNotificationOpen);
  const notificationMsg = useSelector(selectNotificationMsg);
  const hideNotification = ()=> isNotificationOpen && setTimeout(() => {
    dispatch(closeNotification());
  }, 4000);

  useEffect(()=>{
    hideNotification()
  },[isNotificationOpen])


  const handleToggle = () => {
    dispatch(toggleTheme());
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
      {isNotificationOpen && <Notification msg={notificationMsg} />}
      <Outlet />
    </>
  );
};

export default Aside;
