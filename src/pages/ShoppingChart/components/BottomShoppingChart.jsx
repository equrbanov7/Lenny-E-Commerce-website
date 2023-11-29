import EmptyCardInfo from "../../../components/EmptyCardInfo";
import LoadingItems from "../../../components/LoadingItems";
import "./bottomShoppingChart.scss";
import CatchBuyingItems from "./components/CatchBuyingItems";
import ProductSummary from "./components/ProductSummary";
import { useSelector } from "react-redux";
const BottomShoppingChart = () => {
  const { productIds } = useSelector((state) => state.selectedProducts);
  const { loading } = useSelector((state) => state.selectedProducts);

  //console.log(productIds, "aaaadkjas");
  return (
    <div className="BottomShoppingChart">
      {loading ? (
        // Show loading state while data is being fetched
        <LoadingItems loading={loading} size={40} />
      ) : productIds.length > 1 ? (
        <>
          <CatchBuyingItems />
          <ProductSummary />
        </>
      ) : (
        <EmptyCardInfo />
      )}
    </div>
  );
};

export default BottomShoppingChart;
