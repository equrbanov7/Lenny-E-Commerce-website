import React from "react";
import Button from "../../../components/Button";
import TitleDescription from "../../../components/TitleDescription";
import CatchPopularProductsHome from "./component/CatchPopularProductsHome";
import "./popularProduct.scss";


const PopularProduct = () => {
  const [counter, setCounter] = React.useState(8);
  const [clickCount, setClickCount] = React.useState(0);
  const [loadMode, setLoadMode] = React.useState(true); // Initialize to "Load More" mode
 

  

  const loadMoreOrLess = () => {
    if (loadMode) {
      // "Load More" mode
      if (clickCount < 2) {
        setCounter(counter + 8);
        setClickCount(prev => prev+1)
      }
      else{
        //console.log(counter,"exm")
        setLoadMode(!loadMode);
      }
    } else {
      // "Load Less" mode
      //setLoadMode(!loadMode);
      setCounter(8);
      setLoadMode(!loadMode);
      setClickCount(0)
    }
    // Toggle the load mode
   
  };

  return (
    <div className="catchAllPopularProducts my-Margin-container">
      <div className="helperDivforModule">
      <TitleDescription
        title={"Popular Product on Lenny"}
        desc={
          "Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in"
        }
      />
      </div>
     

      <CatchPopularProductsHome count={counter} />

      <Button
        btnData={loadMode ? "Load More" : "Load Less"}
        handleClick={loadMoreOrLess}
      />
      {/* <Button btnData={"Load Less"} handleClick={loadLess}/> */}
    </div>
  );
};

export default PopularProduct;
