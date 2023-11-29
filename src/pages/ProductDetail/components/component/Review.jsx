import ReviewTopResults from "./components/ReviewTopResult/ReviewTopResults";
import ReviewBottomResult from "./components/ReviewsBottom/ReviewBottomResult";
import "./review.scss";

const Review = () => {
  function closeFilterReview() {
    const showingElementt = document.querySelector(".catchFilterAll");
    showingElementt.classList.remove("filterMobileReview");
    const overlayElmm = document.querySelector(".ovarleyReview");
    overlayElmm.classList.toggle("changeOpacityReview");

    // console.log("ovarleyyy")
  }
  return (
    <>
      <div className="forSpesficCatchAllReviewOve">
        <ReviewTopResults />
        <ReviewBottomResult />
        <div className="ovarleyReview" onClick={closeFilterReview}></div>
      </div>
    </>
  );
};

export default Review;
