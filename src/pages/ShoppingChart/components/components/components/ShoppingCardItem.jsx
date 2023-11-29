/* eslint-disable react/prop-types */
import LeftShoppingChecking from "./Microcomponents/LeftShoppingChecking";
import RightShoppingCounter from "./Microcomponents/RightShoppingCounter";
import "./shoppingCardItem.scss";

const ShoppingCardItem = ({product, count,checking}) => {



  return (
    <>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking productInfo={product} priceCount={count} productCheck={checking} />
        <RightShoppingCounter  idSelect={product.id} counter={count}  />
      </div>
      <div className="lineBreakItems"></div>
     
    </>
  );
};

export default ShoppingCardItem;
