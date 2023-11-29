/* eslint-disable react/prop-types */
import Star from "../assets/icons/pages/Home/star.png";
import "./checkBox.scss";

import Checkbox from "@mui/material/Checkbox";
import { useDispatch,useSelector } from "react-redux";
import { controlCategory, controlChecked, setObjFilter } from "../redux/reducers/categoryReducer";


// eslint-disable-next-line react/prop-types
const CheckBox = ({ img, name, value,ctgId,checking, checkCtg }) => {
  const { filterObj } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
 

  function checkEdValue(event) {
    const { value,checked } = event.target; //color, category
    let lowerValue = value.toLowerCase();
   // console.log(value,"checkkk")
    if (lowerValue == "category") {
      
      const controlPayload = {
        checkedName: name,
        checking: checked,
      };

      if(checked){
        dispatch(setObjFilter({ name: "categoryArray", value: [...filterObj.categoryArray, ctgId] }));
      }
      else{
        const updatedCtgArray = filterObj.categoryArray.filter(ctg => ctg !== ctgId);

       dispatch(setObjFilter({ name: "categoryArray", value: updatedCtgArray }));
      }


      dispatch(setObjFilter({ name: "id", value: ctgId }));
      dispatch(controlCategory(controlPayload));
    
    
    }
     else if (lowerValue == "color") {

    
     // console.log(value,name,checked)
      const controlPayload = {
        checkedName: name,
        checking: checked,
      };

      if(checked){
        dispatch(setObjFilter({ name: "colorArray", value: [...filterObj.colorArray, name] }));
      }
      else{
        const updatedColorArray = filterObj.colorArray.filter(color => color !== name);

       dispatch(setObjFilter({ name: "colorArray", value: updatedColorArray }));
      }
    
      dispatch(setObjFilter({ name: "color", value: checked ? name : "" }));
     
      dispatch(controlChecked(controlPayload));
     
    }else if(value == "Best Filter" && name ==="4 stars or upper"  ){
     // console.log(name,"clickk")
     
      const controlPayload = {
        checkedName: name,
        checking: checked,
      };
      dispatch(setObjFilter({ name: "rating", value: checked ? 4 : "" }));
      dispatch(controlChecked(controlPayload));
     
    }
   
  }
  //console.log(filterObj,"ctgg");

  return (
    <div className="catchFormCheck">
      <form>
        <Checkbox
          value={value}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          onChange={(event) => checkEdValue(event)}
           checked={checking || checkCtg}
        />
        {img ? <img src={Star} alt="star" /> : ""}
        <label htmlFor="vehicle1">{name} </label>
      </form>
    </div>
  );
};

export default CheckBox;
