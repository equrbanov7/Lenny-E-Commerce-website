import Radio from "@mui/material/Radio";
import React from "react";
import "./paymentItem.scss";
import ThreeElements from "../../../components/ThreeElements";

//import CssBaseline from "@mui/material/CssBaseline";
//import Box from "@mui/material/Box";
import Example from "../../../assets/icons/pages/payment/PayPal-logo.svg";

const PaymentItem = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="PaymentItem">
      <form>
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
      </form>
      <ThreeElements
        image={Example}
        dataCreator={["Paypal", "yelenastacia99@gmail.com"]}
      />
    </div>
  );
};

export default PaymentItem;
