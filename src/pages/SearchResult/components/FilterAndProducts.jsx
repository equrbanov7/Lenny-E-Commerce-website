import FilterSide from "./FilterSide"
import FilteredProducts from "./FilteredProducts"
import "./filterAndProducts.scss"

// eslint-disable-next-line react/prop-types
const FilterAndProducts = ({searchId}) => {
  const dataFilter = [
    {
      title: "Best Filter",
      elements: [
        { name: "4 stars or upper", star: true },
        { name: "Same-day delivery", star: false },
        { name: "COD", star: false },
        { name: "Discount", star: false },
      ],
      show: null,
    },
    {
      title: "Color",
      elements: [
        { name: "Black", star: false },
        { name: "Red", star: false },
        { name: "White", star: false },
        { name: "Blue", star: false },
        { name: "Brown", star: false },
      ],
      show: "Show All",
    },
    {
      title: "Category",
      elements: [
        { name: "Electronic", star: false, id:1 }, //!id ler manual daxil edilir
        { name: "Fashion", star: false, id:2 },
        { name: "Action Figure", star: false, id:3 },
        { name: "Accessories", star: false , id:4},
        { name: "Book", star: false, id:5 },
        { name: "Gaming", star: false,id:6 },
      ],
      show: "Show All Categories Al",
    },
  ];

  
  return (
    <div className="mergeBoth">
        <FilterSide dataFilter={dataFilter} priceActivate={true} title={"Filter Option"} />
        <FilteredProducts searchId={searchId} /> 
    </div>
  )
}

export default FilterAndProducts