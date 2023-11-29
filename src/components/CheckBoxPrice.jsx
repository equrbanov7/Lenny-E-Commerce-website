import "./checkBoxPrice.scss";
import React from "react";
// eslint-disable-next-line react/prop-types
const CheckBoxPrice = ({ purpose, onInputChange, controlInputValue }) => {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(()=>{
    setInputValue(controlInputValue)
  },[controlInputValue])
  const handleSubmit = (e) => {
    
    const priceRanges = document.querySelectorAll(".priceRanges");
    //console.log(priceRanges)
    priceRanges.forEach((range) => {
      range.classList.remove("selectedPriceRange");
    });
    e.preventDefault(); // Prevent the default form submission
    onInputChange(inputValue, purpose); // Send the input value to the parent component
  };
  return (
    <div className="formCHeckSelect">
      <form className="selectAll" onSubmit={handleSubmit}>
        <select className="priceSelects">
          <option value="usd">USD</option>
          <option value="azn">AZN</option>
          <option value="tl">TL</option>
        </select>
        <div className="lineSelect">data</div>
        <input
          type="number"
          placeholder={purpose}
          value={inputValue }
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="hiddenBtn" type="submit">
          Submit
        </button>{" "}
        {/*Elvin sil bunu none */}
      </form>
    </div>
  );
};

export default CheckBoxPrice;
