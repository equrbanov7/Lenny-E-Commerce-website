import styles from "./selection.module.scss";
import SearchIcon from "../assets/icons/header/search-normal.svg";
import React from "react";
import { useDispatch } from "react-redux";
import { setObjFilter } from "../redux/reducers/categoryReducer";

const Selection = (data) => {
  //console.log(data.data);
  const dispatch =useDispatch();
  const [selectedValue, setSelectedValue] = React.useState("all");

  const handleSelectChange = (event) => {
  //  console.log(event.target.value)
    setSelectedValue(event.target.value);
    if(event.target.value === "desc"){
      dispatch(setObjFilter({name:"sort", value:"desc" }))
    }else if(event.target.value === "asc"){
      dispatch(setObjFilter({name:"sort", value:"asc" }))
    }else{
      dispatch(setObjFilter({name:"sort", value:"" }))
    }
  };
  return ( 
    <div>
      <form className={styles.formCategory}>
        <select
          className={styles.select}
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="all" >{data.data.title}</option>
          {data.data.elements.map((element, index) => (
            <option key={index} value={element.toLowerCase()}>
              {element}
            </option> 
            
          ))}
        </select>

        <div className={styles.serachIcon}>
          <img src={SearchIcon} alt="searchingicon" />
        </div>
      </form>
    </div>
  );
};

export default Selection;
