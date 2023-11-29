import React from "react";
import BottomShoppingChart from "./components/BottomShoppingChart";
import TopShoppingChart from "./components/TopShoppingChart";
import RelatedPoduct from "../../components/RelatedProducts";
import "./shoppingChart.scss";

const ShoppingChart = () => {
  const [sortType] = React.useState({
    title: "Sort By:",
    elements: ["Latest Added", "New", "Past"],
  });

  

  return (
    <div className="spesficStyleForShopping">
      <div className="ShoppingChartAll my-Margin-container">
        <div className="ShoppingChart ">
          <TopShoppingChart
            dataSelect={sortType}
            title={"Shopping Chart"}
            desc={"Showing your choices product"}
          />
          <BottomShoppingChart />
        </div>
        <RelatedPoduct />
      </div>
    </div>
  );
};

export default ShoppingChart;
