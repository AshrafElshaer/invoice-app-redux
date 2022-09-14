import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTheme,
  selectIsNotificationOpen,
  selectNotificationMsg,
} from "../../features/ui/ui.selectors";
import {
  closeNotification,
  notifyUser,
  toggleTheme,
} from "../../features/ui/uiSilce";
import { signOut } from "../../features/user/userSlice";
import { clearInvoices } from "../../features/invoices/invoicesSlice";
import { selectUser } from "../../features/user/user.selectors";
import {
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import IMAGES from "../../assets/images";
import Notification from "../notification model/Notification";

import {
  AsideBarWrapper,
  Logo,
  ToggleSwitch,
  Profile,
  SignOutBtn,
} from "./aside.styles";

const Aside = () => {
  const { logo, avatar, iconMoon, iconSun } = IMAGES;
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const isNotificationOpen = useSelector(selectIsNotificationOpen);
  const notificationMsg = useSelector(selectNotificationMsg);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOutUser()
      .then(dispatch(signOut()))
      .then(dispatch(clearInvoices()))
      .then(dispatch(notifyUser("See You Later 👋")));
  };
  const hideNotification = () =>
    isNotificationOpen &&
    setTimeout(() => {
      dispatch(closeNotification());
    }, 4000);

  useEffect(() => {
    hideNotification();
    
    
  }, [isNotificationOpen]);

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
        {user && <SignOutBtn onClick={handleSignOut}>Log Out</SignOutBtn>}
        <Profile
          src={user ? (user.photoURL ? user.photoURL : avatar) : avatar}
          alt='profile'
        />
      </AsideBarWrapper>
      {isNotificationOpen && <Notification msg={notificationMsg} />}
      <Outlet />
    </>
  );
};

export default Aside;
