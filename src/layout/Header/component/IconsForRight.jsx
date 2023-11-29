import Basket from "../../../assets/icons/header/shopping-cart.svg";
import User from "../../../assets/icons/header/user.svg";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProducts } from "../../../redux/actions/cardAction";
import "./IconsForRight.scss";
// For Logined User
import SmsBox from "../../../assets/icons/header/smsBox.svg";
import Notification from "../../../assets/icons/header/notification.svg";
import Person from "../../../assets/icons/header/userImg.svg";
import MenuBurger from "../../../assets/icons/header/menu.svg";

import React from "react";

const IconsForRight = () => {
  const navigation = useNavigate();

  const { searchFocus } = useSelector((state) => state.searching);

  //Login token
  const { token, status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { productIds } = useSelector((state) => state.selectedProducts);
  // console.log(productIds.length, "iddddd");
  const uniqueItems = [...new Set(productIds)];

  //console.log(uniqueItems,"unikkk");

  React.useEffect(() => {
    dispatch(getSelectedProducts(productIds));
  }, [dispatch, productIds]);

  function getElements() {
    navigation(`/shoppingChart`);
    // console.log("baskettt",productIds)
  }

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: 10,
      top: 7,
      padding: "5px",
      borderRadius: "30px", // Use quotes for property values
      border: "1.5px solid var(--white-general, #FFF)", // Use quotes for property values
      background: "var(--red-1, #E04124)", // Use quotes for property values
    },
  }));

  function showSign() {
    const showingElement = document.querySelector(".SignUpIn");
    // console.log(showingElement);
    showingElement.classList.toggle("signUpInShowing");
    // // console.log(showingElement,"aaaaaaaaaaaaaa")
    const overlayElm = document.querySelector(".ovarley");
    overlayElm.classList.toggle("changeOpacity");
  }

  function showLoginedPersonInfo() {
    const showingPersonInfo = document.querySelector(".UserModal");
    showingPersonInfo.classList.toggle("showUserPersonModal");
    //  console.log(showingPersonInfo,"adsa")
  }
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 554);
  React.useEffect(() => {
    // Function to update isMobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 554);
    };

    // Add a window resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <ul className={`icons ${status !== "success" && "forNonRegistratedItems"}`}>
      <li
        className={`basket forDesignControl ${
          status !== "success" && "forNonRegBasket"
        } `}
        onClick={getElements}
      >
        <IconButton aria-label="cart">
          <StyledBadge
            badgeContent={uniqueItems.length > 1 ? uniqueItems.length - 1 : 0}
            color="secondary"
          >
            {" "}
            {/* Gelecek cardlarr  */}
            <img src={Basket} alt="icon" />
          </StyledBadge>
        </IconButton>
      </li>

      {/*Control Registration   */}
      {token && status == "success" ? (
        <>
          { isMobile &&  searchFocus ? (
            <></>
          ) : (
            <>
              <li className="notification forDesignControl">
                <img src={Notification} alt="notification" />
              </li>

              <li className="message forDesignControl">
                <img src={SmsBox} alt="smsBox" />
              </li>
            </>
          )}
        </>
      ) : (
        <></>
      )}

      <li className="line"></li>

      {/*Control Registration   */}
      {token && status == "success" ? (
        <>
          <li
            className="personLogined forDesignControl desktopInfoTopMenu"
            onClick={showLoginedPersonInfo}
          
          >
            <img src={Person} alt="user" className="selectedUserPicture" />
          </li>

          <li
            className="personLogined forDesignControl burgerMenuTop"
            onClick={showLoginedPersonInfo}
          >
            <img src={MenuBurger} alt="user" className="selectedUserPicture" />
          </li>
        </>
      ) : (
        <>
          <li className="person" onClick={showSign}>
            <img src={User} alt="user" />
          </li>
        </>
      )}
      {/*User Information Show and Close  */}
      {/* <UserModal /> */}
    </ul>
  );
};

export default IconsForRight;
