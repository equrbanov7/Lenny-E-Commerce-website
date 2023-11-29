/* eslint-disable react/prop-types */
// import React from "react";
import "./topShoppingChart.scss";
import TitleDescription from "../../../components/TitleDescription";
import SelectionofProduct from "../../../components/SelectionofProduct";

const TopShoppingChart = ({dataSelect, title,desc}) => {

  return (
    <div className="allTopShoppingChart">
      <div className="TopShoppingChart ">
        <TitleDescription
          title={title}
          desc={desc}
        />
        {dataSelect?  <SelectionofProduct dataType={dataSelect} /> : ""} 
      </div>
    </div>
  );
};

export default TopShoppingChart;
