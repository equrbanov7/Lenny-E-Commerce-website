/* eslint-disable react/prop-types */
import TitleDescription from "../../../../components/TitleDescription";
import CatchAllSides from "./components/CatchAllSides";
import "./detailProduct.scss";
//import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../../../redux/actions/productAction";
import React from "react";
const DetailProduct = ({ infoId }) => {
  //console.log(infoId,"detailll");

  const dispatch = useDispatch();

  const { oneProduct } = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch(getOneProduct(infoId));
  }, [dispatch, infoId]);

  const [productInfo, setProductInfo] = React.useState({
    title: "",
    description: "",
  });
  React.useEffect(() => {
    if (oneProduct && oneProduct.data && oneProduct.data[0]) {
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        title: oneProduct.data[0].attributes.title,
        description: oneProduct.data[0].attributes.description,
      }));
    }
  }, [oneProduct]);

  return (
    <>
      <section className="detailProductCatch">
        <TitleDescription
          title={productInfo.title}
          desc={productInfo.description}
        />
        <CatchAllSides />
      </section>
    </>
  );
};

export default DetailProduct;
