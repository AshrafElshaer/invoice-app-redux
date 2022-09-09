import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";

import { AuthenticationWrapper , SwitchAuthWrapper} from "./authentication.styles";

const Authentication = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const toggleRegistration = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <AuthenticationWrapper>
      <form>
        <FormInput label='Email Address' type='email' required />
        <FormInput label='Password' type='password' required />
        {isLogIn ? (
          ""
        ) : (
          <FormInput label='Confirm Password' type='password' required />
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
        <Button buttonType='purple' type='button'>
          <FaGoogle /> Log In With Google Account
        </Button>
      </form>
    </AuthenticationWrapper>
  );
};

export default Authentication;
