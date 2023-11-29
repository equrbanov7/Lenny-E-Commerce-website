import Selection from "../../../components/Selection";
import TitleDescription from "../../../components/TitleDescription";
import React from "react";

import MenuBar from "../../../assets/icons/pages/search/menuBar.svg";
import Menu from "../../../assets/icons/pages/search/menu.svg";
import FilterIcon from "../../../assets/icons/pages/search/filter.svg";
import "./searchHeadInfo.scss";
import { useSelector } from "react-redux";
const SearchHeadInfo = () => {
  const [objData, setObjData] = React.useState({
    title: "Relevant Products",
    elements: ["DESC", "ASC"],
  });

  // Function to update the title when the screen size is 778px or smaller
  const updateTitle = () => {
    if (window.innerWidth <= 778) {
      setObjData({
        title: "Sort By Relevant Products",
        elements: objData.elements,
      });
    } else {
      setObjData({
        title: "Relevant Products",
        elements: objData.elements,
      });
    }
  };
  React.useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", updateTitle);

    // Call the updateTitle function initially
    updateTitle();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateTitle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showFilter() {
    const showingElement = document.querySelector(".catchFilterAll");
    showingElement.classList.toggle("filterMobile1");
    // console.log(showingElement,"aaaaaaaaaaaaaa")
    const overlayElm = document.querySelector(".ovarley1");
    overlayElm.classList.toggle("changeOpacity1");
  }

  const { oneCategory } = useSelector((state) => state.categories);

  function changeGridStatus() {
    const gridItems = document.querySelector(".catchFilteredPro");
    gridItems.classList.toggle("gridStatusChangeControl");
    console.log(gridItems);
  }
  return (
    <div className="searchHeadInfoAll">
      <div className="leftInfos">
        <TitleDescription
          title={"Showing products"}
          desc={
            oneCategory?.data?.length > 0
              ? `Displaying 1 - ${oneCategory?.data?.length} products`
              : "No products to display"
          }
        />
      </div>
      <div className="rightInfos">
        <div className="leftSelectionSide">
          <p>Sort by:</p>
          <Selection data={objData} />
        </div>

        <div className="allRightElments">
          <div className="imgCatchFlt icon" onClick={showFilter}>
            <img src={FilterIcon} alt="filtering" />
          </div>
          <div className="lineBridge"></div>
          <div className="rightSideMenu">
            <div className="firstIconBar icon" onClick={changeGridStatus}>
              <img src={MenuBar} alt="menuBar" />
            </div>
            <div className="secondIconBar icon">
              <img src={Menu} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeadInfo;
