/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import "./productInfoRight.scss";
import Star from "../../../assets/icons/pages/Home/star.png";
import React from "react";
import SelectionofProduct from "../../../components/SelectionofProduct";
import ButtonImg from "../../../components/ButtonImg";

import Basket from "../../../assets/icons/pages/detail product/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../../redux/actions/productAction";
import { addItem,selectingIdCount } from "../../../redux/reducers/cardReducer";

// eslint-disable-next-line react/prop-types
const ProductInfoRight = ({ infoId }) => {
  //{ name, rating, price, desc }

  const dispatch = useDispatch();

  
  var i=0;
  function collectProductId() {
    const isChecked = exampleIdCount.some(
      (item) => item.id == infoId && item.checking
    );
    i++
    //console.log(i++, isChecked) // Islemese Card  bunu yoxla!!!
    dispatch(addItem(infoId));

    dispatch(selectingIdCount({id:infoId,count:i,checking:isChecked}))
    // console.log(infoId)
  }

  const { oneProduct } = useSelector((state) => state.products);
  const {exampleIdCount}=useSelector((state) => state.selectedProducts);
  //console.log(exampleIdCount,"oneeeeeeee")

  React.useEffect(() => {
    dispatch(getOneProduct(infoId));
  }, [dispatch, infoId]);

  const [productInfo, setProductInfo] = React.useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
  });
  React.useEffect(() => {
    if (oneProduct && oneProduct.data && oneProduct.data[0]) {
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        title: oneProduct.data[0].attributes.title,
        description: oneProduct.data[0].attributes.description,
        price: oneProduct.data[0].attributes.price,
        rating: oneProduct.data[0].attributes.rating,
      }));
    }
  }, [oneProduct]);

  const [dataType] = React.useState({
    title: "Type",
    elements: ["Wireless", "Wired", "Premium"],
  });
  const [dataColor] = React.useState({
    title: "Color",
    elements: ["Black", "White", "Blue"],
  });

  return (
    <div className="ProductInfoRightAll">
      <div className="topInfoProduct">
        <h2 className="nameOfProduct">{productInfo.title}</h2>
        <div className="rankingProduct">
          <div className="starSide">
            <img src={Star} alt="star" />
            <span>{productInfo.rating}</span>
          </div>
          <span  className="dotSpace"></span>
          <p className="soldCount">1,238 Sold</p>
        </div>
        <div className="productPrice">
          <h4>{`$${productInfo.price}`}</h4>
        </div>
      </div>

      <div className="middleDescription">
        <p>{productInfo.description}</p>
      </div>
      <div className="lineBreak"></div>

      <div className="catchAllSelections">
        <h4 className="titleOfSide">Product Variant:</h4>

        <div className="catchSlections">
          <SelectionofProduct dataType={dataType} />
          <SelectionofProduct dataType={dataColor} />
        </div>
      </div>

      <div className="btnesOfProduct">
        <ButtonImg name={"Buy Now"} />
        <ButtonImg
          name={"Add to Chart"}
          image={Basket}
          handleId={()=> collectProductId()}
        />
      </div>
    </div>
  );
};

export default ProductInfoRight;
