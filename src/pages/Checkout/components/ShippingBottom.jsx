import "./shippingBottom.scss";
import ShippingLogo from "../../../assets/icons/pages/shoppingChart/shippingLogo.svg";
import ThreeElements from "../../../components/ThreeElements";
 import {AiOutlineDown} from "react-icons/ai"

const ShippingBottom = () => {
  return (
    <div className="ShippingBottom">
      <h3 className="titleOfCargo">Shipping</h3>

      <div className="catchShippingAddres">
        <ThreeElements
          image={ShippingLogo}
          dataCreator={["TIKI", "4 - 7 Days"]}
        />
        <div className="priceSide">
          <span className="price">$129</span>
          <span className="iconDown">{<AiOutlineDown /> }</span>  
        </div>
      </div>
    </div>
  );
};

export default ShippingBottom;
