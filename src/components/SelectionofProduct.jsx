/* eslint-disable react/prop-types */
import "./selectionofProduct.scss";
import React from "react";
// eslint-disable-next-line react/prop-types
const SelectionofProduct = ({ dataType }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Function to update window width
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // Determine whether to merge the title and "Latest Added" based on window width
  const mergeTitle = windowWidth <= 778;
  return (
    <div className="forResponsiveSelectItems">
      <div className="selectOfProduct">
     {mergeTitle ? null : <h6>{dataType?.title}</h6>}
     <form>
        <select className="select">
          {dataType?.elements.map((element, index) => (
            <option key={index} value={element.toLowerCase()}>
              {mergeTitle && element === 'Latest Added'
                ? `${dataType?.title} - ${element}`
                : element}
            </option>
          ))}
        </select>
      </form>
      </div>
    </div>
  );
};

export default SelectionofProduct;
