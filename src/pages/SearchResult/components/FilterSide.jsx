/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBox from "../../../components/CheckBox";

import Star from "../../../assets/icons/pages/Home/star.png";
import "./filterSide.scss";
import CheckBoxPrice from "../../../components/CheckBoxPrice";
import PriceRange from "./components/PriceRange";
import { useDispatch, useSelector } from "react-redux";
import {

  setObjFilter,
} from "../../../redux/reducers/categoryReducer";


// eslint-disable-next-line react/prop-types
const FilterSide = ({ title, dataFilter, priceActivate }) => {
  const priceRanges = [
    { key: "range1", start: "0", stop: "200" },
    { key: "range2", start: "200", stop: "500" },
    { key: "range3", start: "500", stop: "1500" },
  ];

  const dispatch = useDispatch();
  const { filterObj, checkFilterControl,checkCategoryControl } = useSelector(
    (state) => state.categories
  );
  // Define a function to handle the selection
  // For constant price
  const handlePriceRangeSelection = (event) => {
    const hasClass = event.target.classList.contains("selectedPriceRange"); // class olduqnu yoxlama
    const priceRanges = document.querySelectorAll(".priceRanges"); // item secme all

    priceRanges.forEach((range) => {
      range.classList.remove("selectedPriceRange"); // hamisinda silme
    });

    // Toggle the class on the clicked element, but only if it didn't have it already
    if (!hasClass) {
      event.target.classList.add("selectedPriceRange"); // elave etme toggle mentiqi
    }

    // Check if any price range has the selected class
    const anySelected = Array.from(priceRanges).some(
      (range) => range.classList.contains("selectedPriceRange") // geriye sifirlama ucun secme
    );

    // If none of the price ranges have the class, dispatch empty price
    if (!anySelected) {
      dispatch(setObjFilter({ name: "price", value: ["", ""] }));
    } else {
      // Extract start and end numbers from the clicked element
      const parts = event.target.innerHTML.split(" - ");
      const startNumber = parseInt(parts[0].replace("$", ""), 10); // temizleme
      const endNumber = parseInt(parts[1].replace("$", ""), 10);

    
      // Set the filter object with the selected range
      dispatch(
        setObjFilter({ name: "price", value: [String(startNumber), String(endNumber)] })
      );
    }
  };

 

  const handleChangePrice = (value, purpose) => {
    dispatch(
      setObjFilter({
        name: "price",
        value: [
          purpose === "Minimum price" ? value : filterObj.price[0],
          purpose === "Maximum price" ? value : filterObj.price[1],
        ],
      })
    );
  };

  //console.log(filterObj.price, "objjj");
  return (
    <div className="catchFilterAll">
      <div className="nameOfTitle">
        <h2>{title}</h2>
      </div>

      <div className="lineBlockFlter"></div>
      <div className="FilterOptions">
        {dataFilter.map((filterCtg, index) => (
          <>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="spesfikInfoTitle">
                  {filterCtg.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails key={index}>
                <Typography>
                  <div className="CatchCheckBoxes">
                    {filterCtg.elements.map((filterElm) => {
                      // console.log(filterElm.name)
                      const checkingItem = checkFilterControl.find(
                        (item) => item.checkedName === filterElm.name
                      );
                      const checkingItemCtg = checkCategoryControl.find(
                        (item) => item.checkedName === filterElm.name
                      );

                      //console.log(checkingItem.checking)
                      return (
                        <CheckBox
                          key={filterElm.id}
                          img={filterElm.star ? Star : ""}
                          name={filterElm.name}
                          value={filterCtg.title}
                          ctgId={filterElm.id}
                          checking={
                            checkingItem ? checkingItem.checking : false
                          }
                          checkCtg={checkingItemCtg ? checkingItemCtg.checking : false   }
                        />
                      );
                    })}
                    {filterCtg.show && (
                      <div className="ShowAll">
                        <p>{filterCtg.show}</p>
                      </div>
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="lineBlockFlter"></div>
          </>
        ))}

        {/*For Price       */}
        {priceActivate && (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="spesfikInfoTitle">
                  Price Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="CatchCheckBoxes">
                    <CheckBoxPrice
                      purpose={"Minimum price"}
                      onInputChange={handleChangePrice}
                      controlInputValue={filterObj.price[0]}
                    />

                    <CheckBoxPrice
                      purpose={"Maximum price"}
                      onInputChange={handleChangePrice}
                      controlInputValue={filterObj.price[1]}
                    />
                    {priceRanges.map((range) => {
                      const startWithoutDollar = range.start.replace(/\$/g, "");
                      const stopWithoutDollar = range.stop.replace(/\$/g, "");
                      const isMatch = filterObj.price[0] == startWithoutDollar && filterObj.price[1] == stopWithoutDollar;


                        
                      return (
                        <PriceRange
                          key={range.key}
                          start={startWithoutDollar}
                          stop={stopWithoutDollar}
                          handleClick={handlePriceRangeSelection}
                          controlClass={isMatch}
                        />
                      );
                    })}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="lineBlockFlter"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSide;
