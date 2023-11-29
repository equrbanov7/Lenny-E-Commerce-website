/* eslint-disable react/prop-types */
import React from "react";
// import CardItem from "../../../../components/CardItem";
//import { getProducts } from "../../../../api/products";
import "./catchPopularProductsHome.scss";
import NewCarditem from "../../../../components/NewCarditem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions/productAction";
import { useNavigate } from "react-router-dom";
import LoadingItems from "../../../../components/LoadingItems";
import { signOutUserFilters } from "../../../../redux/reducers/categoryReducer";

const CatchPopularProductsHome = ({ count }) => {
  const navigation = useNavigate();
  function catchId(idx, ctg, name,ctgId) {
  
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);
    dispatch(signOutUserFilters())
  
  }
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts(count));
  }, [count, dispatch]);

  return (
    <div className="catchPopularProducts">
      {loading ? (
        // Show loading state while data is being fetched
        <LoadingItems loading={loading} size={40} />
      ) : (
        products?.data?.map(({ id, attributes }) => {
          let truncatedTitle = attributes.title;

          if (window.innerWidth > 778 && window.innerWidth <= 1024) {
            truncatedTitle = attributes.title.slice(0, 23) + "...";
          } else if (window.innerWidth <= 778) {
            truncatedTitle = attributes.title.slice(0, 15) + "...";
          } else if (window.innerWidth <= 572) {
            truncatedTitle = attributes.title.slice(0, 10) + "...";
          }

          return (
            <NewCarditem
              key={id}
              title={truncatedTitle}
              desc={attributes.description}
              rating={attributes.rating}
              price={attributes.price}
              image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                attributes?.images?.data[0].attributes.url
              }`}
              handleId={() =>
                catchId(
                  id,
                  attributes?.categories?.data[0]?.attributes?.title,
                  attributes.title,
                  attributes?.categories?.data[0]?.id
                )
              }
            />
          );
        })
      )}
    </div>
  );
};

export default CatchPopularProductsHome;
