import FilterSide from "../../../../../SearchResult/components/FilterSide"
import ReviewsRightItems from "./component/ReviewsRightItems"
import "./reviewBottomResult.scss"

const ReviewBottomResult = () => {
  const dataFilter = [
    {
      title: "Rating",
      elements: [
        { name: "5", star: true },
        { name: "4", star: true },
        { name: "3", star: true },
        { name: "2", star: true },
        { name: "1", star: true },
      ],
      show: null,
    },
    {
      title: "Review Topics",
      elements: [
        { name: "Product Quality", star: false },
        { name: "Seller Services", star: false },
        { name: "Product Price", star: false },
        { name: "Shipment", star: false },
        { name: "Match with Description", star: false },
      ],
      show: null,
    },
    
  ]; 
  return (
    <div className="ReviewBottomResult">
        <FilterSide dataFilter={dataFilter} title={"Reviews Filter"} />
        <ReviewsRightItems />
    </div>
  )
}

export default ReviewBottomResult