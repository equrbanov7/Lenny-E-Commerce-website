import ThreeElements from "./ThreeElements";
import Button from "./Button";
import ShoppingCard from "../assets/icons/pages/detail product/shopping-cart.svg";
import { Link } from "react-router-dom";
import "./emptyCardInfo.scss"

const EmptyCardInfo = () => {
  return (
    <div className="EmptyCardInfo my-SpesficContainer">
      <div className="leftInfoEmpty">
        <ThreeElements
          image={ShoppingCard}
          dataCreator={["There are no any items"]}
        />
      </div>
      <div className="transitionSHopping">
        <Link to="/Electronics/1">
          <Button btnData={"Start Shopping"} />
        </Link>
      </div>
    </div>
  );
};

export default EmptyCardInfo;
