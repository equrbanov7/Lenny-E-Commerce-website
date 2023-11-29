/* eslint-disable react/no-unescaped-entities */
//Images
import Logo from "../../assets/icons/header/Logo.svg";
import IconsForRight from "./component/IconsForRight";
import Search from "./component/Search";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuthLogin,
  fetchAuthRegister,
} from "../../redux/reducers/auth/authThunk";

//Style
import "./header.scss";
import SignUpIn from "../../components/SignUpIn";

//React-Form

import { useForm } from "react-hook-form";
import UserNotificationSign from "../../components/UserNotificationSign";
import {
  
  changeShowContent,
  changeSignInStatus,
} from "../../redux/reducers/auth";

//Import Image Notify
import SuccesImg from "../../assets/icons/header/tick-circle.svg";
import ErrorImg from "../../assets/icons/header/ErrorTick.png";
import UserModal from "./component/UserModal";
//import React from "react";

const Header = () => {
  const { regStatus, showContent, status, token } = useSelector(
    (state) => state.auth
  );

  //console.log(userDatas.username, "error handler");

  function signInError() {
    dispatch(changeSignInStatus());
    alert("Please write correct email or password");
  }

  const handleClick = () => {
    // setShowContent(!showContent);
    dispatch(changeShowContent());
  };

  //SignUpIn Closingg
  function closeFilter() {
    const showingElement = document.querySelector(".SignUpIn");
    showingElement.classList.remove("signUpInShowing");
    const overlayElm = document.querySelector(".ovarley");
    overlayElm.classList.toggle("changeOpacity");

    // console.log("ovarleyyy")
  }

  //SignUpIn  HookForm Getting Value

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Register Submit
  const onSubmit = (data) => {
    dispatch(fetchAuthRegister(data));
    //console.log(data, "aaaaaa");
  };

  // Login Submit
  const onLoginSubmit = (data) => {
    const logObjj = {
      identifier: data.email,
      password: data.password,
    };

    //console.log(data.email, data.password, "loginnnn");
    dispatch(fetchAuthLogin(logObjj));
  };
  // console.log(watch('password'))

  // Login succed Notification asynchronous
  // const [showNotification, setShowNotification] = React.useState(false);

  // React.useEffect(() => {
  //   if (status === "success" && token && !showModalLoginInfo  ) {
  //     setShowNotification(true);
      
  //     setTimeout(() => {
  //       dispatch(changeModalLogStatus())
  //       setShowNotification(false);
  //     }, 2000); // Display for 3 seconds
  //   }
  // }, [dispatch, showModalLoginInfo, status, token]);

 // const loginSuccedNotification ="loginSuccedNotification"
  return (
    <header>
      <div className="container">
        <Link to={"/"} className="linkLogo">
          <div className="leftLogo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <Search />
        <div className="rightItems">
          <IconsForRight />
        </div>
      </div>

      <SignUpIn>
        <div className="signUp">
          {/*Sign Up side  */}
          {showContent ? (
            <>
              {regStatus === "success" ? (
                //Go to Sign In it is succesful registration
                <>
                  <UserNotificationSign
                    image={SuccesImg}
                    description={
                      "Lorem ipsum dolor sit amet consectetur. Velit ut ipsum tortor diam nec blandit ultrices et magna nisl eu."
                    }
                    title={"Create Account Successfull!"}
                  />
                </>
              ) : regStatus === "error" ? (
                <>
                  <UserNotificationSign
                    image={ErrorImg}
                    title={"Account Creation Failed"}
                    description={
                      "There was an error creating your account. Please try again."
                    }
                    newClassLogin={"loginSuccedNotification"}
                  />
                </>
              ) : (
                //Sign Up Againn
                <>
                  <h1 className="titleOSign">Sign Up</h1>

                  <div className="formCatch">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/*Username  */}
                      <div className="nameSidef allInput ">
                        <label htmlFor="username">Name</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter your name"
                          {...register("username", { required: true })}
                        />
                        {errors.username?.type === "required" && (
                          <span className="errorMessageInput">
                            Username is required
                          </span>
                        )}
                      </div>

                      {/*Email or Phone   */}
                      <div className="emailOrPhoneside allInput">
                        <label htmlFor="email">Phone Number or Email</label>
                        <input
                          type="text" // Use type="text to allow both email and phone number
                          id="email"
                          name="email"
                          placeholder="Enter your phone number or email"
                          {...register("email", {
                            required: "Email or phone number is required",
                            pattern: {
                              value: /^(?:\+\d{3}\d{9}|\S+@\S+\.\S+)$/,
                              message:
                                "Invalid format. Enter a valid phone number with the country code (+994) or a valid email address.",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="errorMessageInput">
                            {errors.email.message}
                          </span>
                        )}
                      </div>

                      {/*Password   */}
                      <div className="passwordSide allInput">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          autoComplete="on"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters",
                            },
                            // You can add more validation rules here
                          })}
                        />
                        {errors.password && (
                          <span className="errorMessageInput">
                            {errors.password.message}
                          </span>
                        )}
                        <span className="troubleAsking" onClick={handleClick}>
                          Do you have an account?
                        </span>
                      </div>
                      <div className="SubmitButton allInput">
                        <input type="submit" value="Sign Up" />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {status !== "success" ? (
                <>
                  {/*Sign In side  */}
                  <h1 className="titleOSign">Sign In</h1>
                  <div className="formCatch">
                    <form onSubmit={handleSubmit(onLoginSubmit)}>
                      {/*Email or Phone   */}
                      <div className="emailOrPhoneside allInput">
                        <label htmlFor="email">Phone Number or Email</label>
                        <input
                          type="text" // Use type="text to allow both email and phone number
                          id="email"
                          name="email"
                          placeholder="Enter your phone number or email"
                          {...register("email", {
                            required: "Email or phone number is required",
                            pattern: {
                              value: /^(?:\+\d{3}\d{9}|\S+@\S+\.\S+)$/,
                              message:
                                "Invalid format. Enter a valid phone number with the country code (+994) or a valid email address.",
                            },
                          })}
                        />
                        {errors.EmailOrPhone && (
                          <span className="errorMessageInput">
                            {errors.EmailOrPhone.message}
                          </span>
                        )}
                      </div>

                      {/*Password   */}
                      <div className="passwordSide allInput">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          autoComplete="on"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters",
                            },
                            // You can add more validation rules here
                          })}
                        />
                        {errors.password && (
                          <span className="errorMessageInput">
                            {errors.password.message}
                          </span>
                        )}
                        <span className="troubleAsking" onClick={handleClick}>
                          Don't you have an account?
                        </span>
                      </div>

                      <div className="SubmitButton allInput">
                        <input type="submit" value="Sign In" />
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  {status === "success" &&
                    token &&
                    (() => {
                      const showingElement =
                        document.querySelector(".signUpInShowing");
                      if (showingElement) {
                        closeFilter();
                      }
                    })()}
                </>
              )}
            </>
          )}
        </div>
      </SignUpIn>

      {status === "error" && signInError()}

      {/* {showNotification && (
        <UserNotificationSign
          image={SuccesImg}
          title={
            "Login Successful!"
          }
          description={`Welcome, ${userDatas.username}! You have successfully logged in.`}
          newClassLogin={loginSuccedNotification}
        />
      )} */}

      <UserModal />
      <div className="ovarley" onClick={closeFilter}></div>
    </header>
  );
};

export default Header;
