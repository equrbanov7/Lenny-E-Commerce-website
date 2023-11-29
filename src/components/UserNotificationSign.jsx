/* eslint-disable react/prop-types */
import "./userNotificationSign.scss";
import TitleDescription from "./TitleDescription";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import {
  changeRegistrationDefault,
  changeRegistrationStatus,
} from "../redux/reducers/auth";

const UserNotificationSign = ({ image, title, description }) => {
  const dispatch = useDispatch();

  const { regStatus } = useSelector((state) => state.auth);

  const handleClick = () => {
    // setShowContent(!showContent);

    dispatch(changeRegistrationStatus());
  };
  const handleReg = () => {
    // setShowContent(!showContent);

    dispatch(changeRegistrationDefault());
  };
  return (
    <div className={`UserNotificationSign`}>
      <div className="innerNotification">
        <div className="imgNotify">
          <img src={image} alt="notify" />
        </div>
        <div className="informationUser">
          <TitleDescription title={title} desc={description} />
        </div>
      
          <div className="btnSign">
            {regStatus === "error" ? (
              <>
                <Button btnData={"Sign Up"} handleClick={handleReg} />
              </>
            ) : (
              <>
                <Button btnData={"Sign In"} handleClick={handleClick} />
              </>
            )}
          </div>
       
      </div>
    </div>
  );
};

export default UserNotificationSign;
