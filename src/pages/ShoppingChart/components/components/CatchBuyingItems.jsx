/* eslint-disable react/prop-types */
import "./catchBuyingItems.scss";
import ThreeElements from "../../../../components/ThreeElements";

import LogiTechC from "../../../../assets/icons/pages/search/LogiTechC.svg";
import ShoppingCardItem from "./components/ShoppingCardItem";
import ShippingBottom from "../../../Checkout/components/ShippingBottom";

import { useSelector } from "react-redux";

const CatchBuyingItems = ({ showShipping }) => {
  const { selectedProducts } = useSelector((state) => state.selectedProducts);
  const { exampleIdCount } = useSelector((state) => state.selectedProducts);
  //console.log(exampleIdCount, "examppp");
  const { result } = useSelector((state) => state.selectedProducts);
  //console.log(result,"countttttt")
  //console.log(selectedProducts.data[0], "selectt");

  const data = ["Logitech Indonesia", "Central Jakarta"];

  return (
    <div className="CatchBuyingItems">
      {selectedProducts?.data?.length > 0 && (
        <div className="nameOfcompany">
          <ThreeElements image={LogiTechC} dataCreator={data} />
        </div>
      )}

      <div className="selectingItemsOfProducts">
      
        {selectedProducts?.data?.map((product, id) => {
          // Find the corresponding count from your data
          const countData = result.find((item) => item.id == product.id);
          const count = countData ? countData.count : 0;

          const checkingItem = exampleIdCount.find(
            (item) => item.id == product.id
          );
          // console.log(checkingItem.checking,"itjejkeh")

          return (
            <ShoppingCardItem
              key={id}
              product={product}
              count={count}
              checking={checkingItem ? checkingItem.checking : false}
            />
          );
        })}

        {showShipping ? <ShippingBottom /> : ""}
      </div>
    </div>
  );
};

export default CatchBuyingItems;
