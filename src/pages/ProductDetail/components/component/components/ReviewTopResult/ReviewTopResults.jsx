import "./reviewTopResults.scss";
import ThreeElements from "../../../../../../components/ThreeElements";
import Score from "../../../../../../assets/icons/pages/detail product/ReviewScore.svg";
import StarsLine from "./components/StarsLine";
import EachRatingLine from "./components/EachRatingLine";

const ReviewTopResults = () => {
  const data = ["from 1,25k reviews"];
  return (
    <div className="allReviewTopResultsWrap">
      <h2 className="titleOfSide">Product Reviews</h2>
      <div className="ReviewTopResults">
        <div className="leftReviewScore">
          <ThreeElements
            dataCreator={data}
            imageSecond={<StarsLine size={5} />}
            image={Score}
          />
        </div>
        <div className="rightReviewRank">
          <EachRatingLine
            StarNumber={"5.0"}
            StarCount={2823}
            StarWidth={"75%"}
          />
          <EachRatingLine StarNumber={"4.0"} StarCount={38} StarWidth={"50%"} />
          <EachRatingLine StarNumber={"3.0"} StarCount={4} StarWidth={"25%"} />
          <EachRatingLine StarNumber={"2.0"} StarCount={0} StarWidth={"0%"} />
          <EachRatingLine StarNumber={"1.0"} StarCount={0} StarWidth={"0%"} />
        </div>
      </div>
    </div>
  );
};

export default ReviewTopResults;
