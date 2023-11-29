import "./reviewsRightItems.scss";
//import React from "react";
//Material Ui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Button from "../../../../../../../components/Button";
import PersonalReviewItem from "./PersonalReviewItem";

import Person1 from "../../../../../../../assets/images/people/Man_1.png";
import Person2 from "../../../../../../../assets/images/people/Man_2.png";
import Person3 from "../../../../../../../assets/images/people/Man_3.png";
import Person4 from "../../../../../../../assets/images/people/Man_4.png";
import Filter from "../../../../../../../assets/icons/pages/search/filter.svg";

const ReviewsRightItems = () => {
  // const [isActive, setIsActive] = React.useState(false);

  const handleClick = (e) => {
    const selectBtn = document.querySelectorAll(".btn");
    selectBtn[0].classList.add("buttonActive");
    for (let i = 0; i < selectBtn.length; i++) {
      selectBtn[i].classList.remove("buttonActive");
    }
    e.target.classList.toggle("buttonActive");
    // setIsActive(!isActive);
  }; 

  function showFilterReview() {
    const showingElementt = document.querySelector(".catchFilterAll");
    showingElementt.classList.toggle("filterMobileReview");
    // console.log(showingElement,"aaaaaaaaaaaaaa")
    const overlayElmm = document.querySelector(".ovarleyReview");
    overlayElmm.classList.toggle("changeOpacityReview")
  }

  return (
    <div className="ReviewsRightItems">
      <h3 className="titleReviewList">Review Lists</h3>
      <div className="forResponsiveDivCatch">
        <div className="btnesReview">
          <Button btnData={"All Reviews"} handleClick={handleClick} />
          <Button btnData={"With Photo & Video"} handleClick={handleClick} />
          <Button btnData={"With Description"} handleClick={handleClick} />
        </div>

        <div className="filterIconSide" onClick={showFilterReview}>
          <img src={Filter} alt="filtering" />
        </div>
      </div>

      <div className="ResultReview">
        <PersonalReviewItem
          Review={"This is amazing product I have."}
          Date={"July 2, 2020 03:29 PM"}
          Name={"Darrell Steward"}
          ImagePerson={Person1}
          control={true}
        />
        <div className="lineBlockBridge"></div>

        <PersonalReviewItem
          Review={"This is amazing product I have."}
          Date={"July 2, 2020 1:04 PM"}
          Name={"Darlene Robertson"}
          ImagePerson={Person2}
        />
        <div className="lineBlockBridge"></div>

        <PersonalReviewItem
          Review={"This is amazing product I have."}
          Date={"June 26, 2020 10:03 PM"}
          Name={"Kathryn Murphy"}
          ImagePerson={Person3}
        />
        <div className="lineBlockBridge"></div>

        <PersonalReviewItem
          Review={"This is amazing product I have."}
          Date={"July 7, 2020 10:14 AM"}
          Name={"Ronald Richards"}
          ImagePerson={Person4}
        />
      </div>

      <div className="paginationCatch">
        <Stack spacing={2}>
          <Pagination count={3} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
};

export default ReviewsRightItems;
