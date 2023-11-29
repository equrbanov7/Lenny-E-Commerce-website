import "./rightShoppingCounter.scss";
import Delete from "../../../../../../assets/icons/pages/search/trash.svg";
import Button from "../../../../../../components/Button";
import {
  removeItem,
  increment,
  decrement,
  mergingData,
} from "../../../../../../redux/reducers/cardReducer";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
// eslint-disable-next-line react/prop-types
const RightShoppingCounter = ({ idSelect, counter }) => {
  const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.selectedProducts);
  const { exampleIdCount } = useSelector((state) => state.selectedProducts);
  const { productIds } = useSelector((state) => state.selectedProducts);
  //console.log(exampleIdCount,"counterrrr")
  //  const[size,setSize]=React.useState(1);

  //console.log(productIds)
  const mergedData = {};
  exampleIdCount.forEach((item) => {
    //console.log(item,"itemmmm")
    if (item.id in mergedData) {
      mergedData[item.id] += item.count;
    } else {
      mergedData[item.id] = item.count;
    }
  });

  // Convert the dictionary back to an array of objects
  const resultObj = Object.entries(mergedData).map(([id, count]) => ({
    id,
    count,
  }));

  //console.log(result,"resulttt");
  React.useEffect(() => {
    dispatch(mergingData(resultObj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //console.log(result, "exampleee");
  function selectDeletingId() {
    dispatch(removeItem(idSelect));
    // console.log(idSelect, "idddd");
  }

  function incrementClick() {
    dispatch(increment({ id: idSelect, newCount: counter + 1 }));
  }

  function decrementClick() {
    dispatch(decrement({ id: idSelect, newCount: counter - 1 }));
  }

  let countSize = 0;
  productIds.forEach((item) => {
    if (String(item) === idSelect) {
      countSize++;
    }
  });
  console.log(countSize);

  return (
    <div className="RightShoppingCounter">
      <div className="forWishCard">
        <h5 className="wishingProduct">Add to Favourite</h5>
      </div>

      <div className="showingAllProcess">
        <div className="counterItem">
          <Button btnData={"-"} handleClick={decrementClick} />
          <span>{counter}</span>
          <Button btnData={"+"} handleClick={incrementClick} />
        </div>
        <div className="deleteItem" onClick={() => selectDeletingId()}>
          <img src={Delete} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default RightShoppingCounter;
