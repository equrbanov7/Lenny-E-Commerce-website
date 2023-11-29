import TopShoppingChart from "../ShoppingChart/components/TopShoppingChart";
import ProductSummary from "../ShoppingChart/components/components/ProductSummary";
import PaymentItem from "./components/PaymentItem";
import "./payment.scss";

const Payment = () => {
  return (
    <div className="PaymentAll">
      <TopShoppingChart title={"Payment"} desc={"Select your payment method"} />
      <div className="allpaymentItemsMethodsCatch my-SpesficContainer">
        <div className="catchLeftallPaymentMethods">
          <h1 className="titleOfMethood">Payment Method</h1>

          <div className="paymentmethodsItems">
            <PaymentItem />
            <div className="lineBreakmethod"></div>
            <PaymentItem />
            <div className="lineBreakmethod"></div>
            <PaymentItem />
          </div>
        </div>

        <ProductSummary />
      </div>
    </div>
  );
};

export default Payment;
