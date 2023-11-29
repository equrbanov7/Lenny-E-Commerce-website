/* eslint-disable react/prop-types */
import ThreeElements from "../../../../../../components/ThreeElements";
import "./leftShoppingChecking.scss";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../../../../../../redux/reducers/cardReducer";
import { signOutUserFilters } from "../../../../../../redux/reducers/categoryReducer";

// eslint-disable-next-line react/prop-types
const LeftShoppingChecking = ({ productInfo, priceCount, productCheck }) => {
  // const {count} =useSelector((state)=> state.selectedProducts)
  // console.log(count,"summaryy")
  const dispatch = useDispatch();
  const dataExm = [productInfo.attributes.title, productInfo.attributes.color];

  const dataPrice = [`$${productInfo.attributes.price * priceCount}`];
  const navigation = useNavigate();
  function catchId(idx, ctg, name,ctgId) {
   // navigation(`/productdetail/${idx}`);
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);
    dispatch(signOutUserFilters())
  
  }
  
 
  const { exampleIdCount } = useSelector((state) => state.selectedProducts);

  const handleCheckboxChange = (id) => {
    const updatedExampleIdCount = exampleIdCount.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          checking: !item.checking,
        };
      }
      return item;
    });
    
    // Dispatch the updated array
    dispatch(toggleCheck(updatedExampleIdCount));

   
  };

  return (
    <div className="LeftShoppingChecking">
      <form>
        <Checkbox
          checked={productCheck}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          onChange={() => handleCheckboxChange(productInfo.id)}
        />
      </form>
      <ThreeElements
        image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
          productInfo?.attributes?.images?.data[0]?.attributes?.url
        }`}
        dataCreator={dataExm}
        dataBottom={dataPrice}
        handleId={() =>
          catchId(
            productInfo.id,
            productInfo.attributes?.categories?.data[0]?.attributes?.title,
            productInfo.attributes?.title,
            
            productInfo.attributes.categories.data[0].id
           
          )
        }
      />
    </div>
  );
};

export default LeftShoppingChecking;
