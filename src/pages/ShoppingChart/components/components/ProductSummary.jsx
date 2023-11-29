import "./productSummary.scss";
import TitleDescription from "../../../../components/TitleDescription";
import { AiOutlineRight } from "react-icons/ai";
import ThreeElements from "../../../../components/ThreeElements";
import PromoCode from "../../../../assets/icons/pages/shoppingChart/promoCode.svg";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
const ProductSummary = () => {
  const { selectedProducts } = useSelector((state) => state.selectedProducts);
  const { exampleIdCount } = useSelector((state) => state.selectedProducts);
  const { result } = useSelector((state) => state.selectedProducts);

  const location = useLocation();
  const pathNames = location.pathname.split("/");
  //console.log(pathNames[1], "loccc");

  //console.log(exampleIdCount, "selectedd")
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let newTotal = 0;

    selectedProducts?.data?.forEach((product) => {
      const countData = result.find((item) => item.id == product.id);
      const count = countData ? countData.count : 0;

      const isChecked = exampleIdCount.some(
        (item) => item.id == product.id && item.checking
      );

      if (isChecked) {
        newTotal += product?.attributes?.price * count;
      }
    });

    setTotal(newTotal);
  }, [exampleIdCount, selectedProducts, result]);

  //non selected alert

  function alertCustomer() {
    alert("You don't select any items!");
  }

  //Login token
  const { token, status } = useSelector((state) => state.auth);

  function alertLoginCustomer(){
    alert("You have to login for payment!");
  }

  return (
    <div className="ProductSummary">
      <h1 className="titleOfCheckBox">Product Summary</h1>
      <div className="selectedProductsInBox">
        {exampleIdCount.some((item) => item.checking) ? (
          selectedProducts?.data?.map((product, id) => {
            const countData = result.find((item) => item.id == product.id);
            const count = countData ? countData.count : 0;

            const isChecked = exampleIdCount.some(
              (item) => item.id == product.id && item.checking
            );

            if (isChecked) {
              return (
                <TitleDescription
                  key={id}
                  title={product?.attributes?.title}
                  desc={`$${product?.attributes?.price * count}`}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <TitleDescription title="No products selected" />
        )}
      </div>

      <div className="lineBreakBox"></div>

      <div className="calculatedItems">
        <TitleDescription title={"Total Price"} desc={`$${total}`} />
        <TitleDescription title={"Total Price (Discount)"} desc={`$${0}`} />
        <TitleDescription title={"Tax & Fee"} desc={`$${0}`} />
      </div>

      <div className="lineBreakBox"></div>
      <div className="totalPriceItems">
        <TitleDescription title={"Total Price"} desc={`$${total}`} />
      </div>

      <div className="usingPromocode">
        <ThreeElements
          image={PromoCode}
          dataCreator={["Use a Promo", "Choose product to use promo"]}
        />
        <AiOutlineRight />
      </div>

      {exampleIdCount.some((item) => item.checking) ? (
        <Link to={"/checkout"}>
          <div className="checkoutCLick">
            {pathNames[1] === "shoppingChart" ? (
              <>

                {token && status == "success" ? (
                   <>
                    <Button btnData={"Checkout"}  />
                   </>
                ):(
                  <>
                   <Button btnData={"Checkout"} handleClick={alertLoginCustomer} />
                  </>
                )}
               


              </>
            ) : (
              <>
                {token && status == "success" ? (
                  <>
                    <Button btnData={"Payment"} />
                  </>
                ) : (
                  <>
                    <Button btnData={"Payment"} handleClick={alertLoginCustomer} />
                  </>
                )}
              </>
            )}
          </div>
        </Link>
      ) : (
        <Link className="notSelectedCheckout" onClick={alertCustomer}>
          <div className="checkoutCLick">
            {pathNames[1] === "shoppingChart" ? (
              <>
                <Button btnData={"Checkout"} />
              </>
            ) : (
              <>
                <Button btnData={"Payment"} />
              </>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductSummary;
