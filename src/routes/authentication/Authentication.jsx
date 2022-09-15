import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import {
  createNewUser,
  loginWithEmail,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { loginUser } from "../../features/user/userSlice";
import { notifyUser } from "../../features/ui/uiSilce";
import { fetchInvoices } from "../../features/invoices/invoicesSlice";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";

import {
  AuthenticationWrapper,
  SwitchAuthWrapper,
} from "./authentication.styles";
import { selectUser } from "../../features/user/user.selectors";

const Authentication = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    user && navigate("/");
  }, [user]);

  const toggleRegistration = () => {
    setIsLogIn(!isLogIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (isLogIn) {
      case true:
        loginWithEmail(email, password)
          .then((userAuth) => {
            dispatch(loginUser(userAuth));
            dispatch(
              notifyUser(
                `Welcome Back ${
                  userAuth.displayName ? userAuth.displayName : userAuth.email
                } 👋`
              )
            );
            dispatch(fetchInvoices(userAuth.uid));
            navigate("/");
          })
          .catch((error) => {
            const errorMessage = error.message;
            switch (errorMessage) {
              case "Firebase: Error (auth/wrong-password).":
                dispatch(
                  notifyUser(
                    "Ops , Wrong Password Please Try Different Password"
                  )
                );
                break;
              case "Firebase: Error (auth/user-not-found).":
                dispatch(notifyUser("Ops , Email Address Was Not Found"));
                break;
              default:
                dispatch(notifyUser(errorMessage));
            }
          });
        setEmail("");
        setPassword("");
        break;
      case false:
        if (password !== confirmPassword) {
          dispatch(notifyUser("Password Don't Match Confirm Password"));
          setConfirmPassword("");
          return;
        }
        createNewUser(email, password)
          .then((userCredential) => {
            dispatch(loginUser(userCredential));
            dispatch(
              notifyUser(
                `Welcome  ${
                  userCredential.displayName
                    ? userCredential.displayName
                    : userCredential.email
                } 👋`
              )
            );
          })
          .catch((error) => {
            if (
              error.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              setEmail("");
              return dispatch(notifyUser("Email Already Exist please Log In"));
            }

            dispatch(notifyUser(error.message));
          });
        break;
      default:
        return;
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
      .then((userAuth) => {
        dispatch(loginUser(userAuth));
        dispatch(fetchInvoices(userAuth.uid));
        dispatch(
          notifyUser(
            `Welcome Back ${
              userAuth.displayName ? userAuth.displayName : userAuth.email
            } 👋`
          )
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/popup-closed-by-user).")
          return;
        dispatch(notifyUser(error.message));
      });
  };

  return (
    <AuthenticationWrapper>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email Address'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label='Password'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogIn ? (
          ""
        ) : (
          <FormInput
            label='Confirm Password'
            type='password'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <Button buttonType='black' type='submit'>
          {isLogIn ? "LogIn" : "Sign Up"}
        </Button>

        {isLogIn ? (
          <SwitchAuthWrapper>
            Don't Have An Account Yet ?
            <h4 onClick={toggleRegistration}>Create Account</h4>
          </SwitchAuthWrapper>
        ) : (
          <SwitchAuthWrapper>
            Already Have An Account ?
            <h4 onClick={toggleRegistration}>Log In</h4>
          </SwitchAuthWrapper>
        )}

        <h2>OR</h2>
        <Button buttonType='purple' type='button' onClick={signInWithGoogle}>
          <FaGoogle /> Log In With Google Account
        </Button>
      </form>
    </AuthenticationWrapper>
  );
};

export default Authentication;
