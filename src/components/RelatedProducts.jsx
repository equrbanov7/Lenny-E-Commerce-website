import React from "react";

import "./relatedProducts.scss";
import TitleItem from "./TitleItem";
import { getProducts } from "../api/products";
import NewCarditem from "./NewCarditem";
import { useNavigate } from "react-router-dom";
const RelatedProducts = () => {
  const [products, setProducts] = React.useState([]);
  const navigation = useNavigate();
  function catchId(idx, ctg, name,ctgId) {
    //navigation(`/productdetail/${idx}`);
    //navigation(`/${ctg}/${name}/${idx}`);
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);
    // console.log(idx)
  }

  React.useEffect(() => {
    async function getAllProducts() { 
      const obj = { limit: 4, start: 0 };
      const data = await getProducts(obj);

      setProducts(data);
      // console.log(data, "++++")
    }
    getAllProducts();
  }, []);

  return (
    <>
      <div className="RelatedProducts my-SpesficContainer ">
        <TitleItem titleInfo={"Related Product"} btnInfo={"View Detail"} />
        <div className="catchRelatedProductUniversal">
          {products?.data?.map(({ id, attributes }) => {
            return (
              <NewCarditem
                key={id}
                title={attributes.title}
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
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
