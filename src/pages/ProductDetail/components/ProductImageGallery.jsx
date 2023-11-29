/* eslint-disable react/prop-types */
import "./productImageGallery.scss";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../../redux/actions/productAction";
import LoadingItems from "../../../components/LoadingItems";


const ProductImageGallery = ({imageId}) => {
  const [imagesApi, setImagesApi] = React.useState([]);
 

  const dispatch = useDispatch();

  const {oneProduct} = useSelector((state) => state.products);
  const {loading} = useSelector((state) => state.products);
  
  React.useEffect( ()=>{
    dispatch(getOneProduct(imageId));
  
  },[dispatch, imageId] )
 
  React.useEffect(() => {
    if (oneProduct.data) {
      const newImagesApi = oneProduct.data[0].attributes?.images?.data?.map((image) => ({
        original: `${import.meta.env.VITE_UPLOAD_IMAGE}${image?.attributes?.url}`,
        thumbnail:`${import.meta.env.VITE_UPLOAD_IMAGE}${image?.attributes?.url}`,
      })) || [];
      
      setImagesApi(newImagesApi);
    }
  }, [oneProduct]);
  
  return (
    <div className="imageGalleryProduct">
    {loading ? (
      // Show loading state while data is being fetched
      <LoadingItems loading={loading} size={40} />
    ) : (
      <ImageGallery
        items={imagesApi}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={3000}
        slideOnThumbnailOver={false}
        showIndex={false}
      />
    )}
  </div>
  
  );
};

export default ProductImageGallery;
