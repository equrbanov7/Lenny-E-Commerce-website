import ThreeElements from "../../../../components/ThreeElements";
import "./merchant.scss";

import Logo from "../../../../assets/icons/pages/detail product/LogiTech.svg";
import ShopMerchant from "../../../../assets/icons/pages/detail product/shop.svg";
import Chatt from "../../../../assets/icons/pages/detail product/message.svg";

import ButtonImg from "../../../../components/ButtonImg";

const Merchant = () => {
  const dataCreator = [
    "Logitech Indonesia",
    "Jakarta Pusat",
    "Top Rated Merchant",
    "Best Merchant",
  ];
  const dataBottom = ["Top Rated Merchant", "Best Merchant"];

  return (
    <>
      <div className="MerchantAll">
        <h2 className="titleOfSide">Merchant Information</h2>
        <div className="merchantElmentsMiddle">
          <ThreeElements
            image={Logo}
            dataCreator={dataCreator}
            dataBottom={dataBottom}
          />
          <div className="btnCatchProduct">
            <ButtonImg image={Chatt} name={"Chat"} />
            <ButtonImg image={ShopMerchant} name={"Visit Merchant"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Merchant;
