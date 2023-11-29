/* eslint-disable no-undef */

import TitleItem from "../../../components/TitleItem";
import "./featuredCtg.scss";
import React from "react";

import "swiper/css";
import "swiper/css/scrollbar";

//import DotLoader from "react-spinners/DotLoader";

// import required modules

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderItem from "../../../components/SliderItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categoryAction";
import LoadingItems from "../../../components/LoadingItems";
import { signOutUserFilters } from "../../../redux/reducers/categoryReducer";

const FeaturedCtg = () => {
  const breakpoints = {
    1600: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    997: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    778: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    568: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  const navigation = useNavigate();
  const { categories } = useSelector((state) => state.categories);
     const { loading } = useSelector((state) => state.categories);

  // console.log(loading,"loadd")

 

 
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function catchId(idx,ctg) {
    //console.log(ctg)
    dispatch(signOutUserFilters())
    navigation(`/${ctg}/${idx}`);
   
  }
  return (
    <div className="FeaturedCtgAll my-SpesficContainer my-Margin-container ">
      <TitleItem titleInfo={"Featured Category"} btnInfo={"View Detail"} />

      <div className="featureCtgItems">
        {loading ? (
          // Show loading state while data is being fetched
          <div className="loading-container">
            <LoadingItems  loading={loading} size={20}/>
          </div>
        ) : (
          <Swiper
            breakpoints={breakpoints}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {categories?.data?.map(({ id, attributes }) => (
              
              <SwiperSlide key={id}>
                <SliderItem
                  key={id}
                  title={attributes.title}
                  image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                    attributes.img.data.attributes.url
                  }`}
                  handleId={() => catchId(id,attributes.title)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default FeaturedCtg;
