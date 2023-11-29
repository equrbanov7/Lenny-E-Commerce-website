// import BottomShoppingChart from "../ShoppingChart/components/BottomShoppingChart";
import EmptyCardInfo from "../../components/EmptyCardInfo";
import LoadingItems from "../../components/LoadingItems";
import RelatedProducts from "../../components/RelatedProducts";
import TopShoppingChart from "../ShoppingChart/components/TopShoppingChart";
import CatchBuyingItems from "../ShoppingChart/components/components/CatchBuyingItems";
import ProductSummary from "../ShoppingChart/components/components/ProductSummary";
import "./checkout.scss";
import Shipping from "./components/Shipping";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { productIds } = useSelector((state) => state.selectedProducts);
  const { loading } = useSelector((state) => state.selectedProducts);
  return (
    <div className="CheckoutAll">
      <TopShoppingChart
        title={"Checkout"}
        desc={"Showing your choices product"}
      />
      {loading ? (
        <LoadingItems loading={loading} size={40} />
      ) : productIds.length > 1 ? (
        <>
          <div className="allcheckoutInfosItems my-SpesficContainer">
            <div className="catchLeftItemandAddres">
              <Shipping />
              <CatchBuyingItems showShipping={true} />
            </div>
            <ProductSummary />
          </div>
        </>
      ) : (
        <>
          <EmptyCardInfo />

          <RelatedProducts />
        </>
      )}
    </div>
  );
};

export default Checkout;
