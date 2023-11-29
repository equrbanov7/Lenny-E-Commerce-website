import React from "react";
import Selection from "../../../components/Selection";
import { useSelector, useDispatch } from "react-redux";
import { getSearchingData } from "../../../redux/actions/searchAction";
import "./search.scss";
import ThreeElements from "../../../components/ThreeElements";
import { useNavigate } from "react-router-dom";
import { searchInputControl } from "../../../redux/reducers/searchReducer";
const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const { searchedData,searchFocus } = useSelector((state) => state.searching);
  const [objData] = React.useState({
    title: "All Categories",
    elements: ["Electronics", "Fashion", "Book"],
  });

 // const [isFocused, setIsFocused] = React.useState(false);
 

  const handleFocus = () => {
    dispatch(searchInputControl())
    
  };

  const handleBlur = () => {
    dispatch(searchInputControl())
  };
  //console.log(searchFocus,"fooo")

  //console.log(isFocused,"focusss")
  const dispatch = useDispatch();

 
  const dataResultRef = React.useRef();
  const inputChannge = React.useRef();
  const middleSearchRef = React.useRef();

  const navigation = useNavigate();

  React.useEffect(() => {
    function handleDocumentClick(event) {
      if (
        middleSearchRef.current &&
        !middleSearchRef.current.contains(event.target)
      ) {
        dataResultRef.current.style.display = "none";
        // console.log("innerr")
      }
    }

    //addingg
    document.addEventListener("click", handleDocumentClick);

    //removingg
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  function catchId(idx, ctg, name, ctgId) {
    //navigation(`/productdetail/${idx}`);
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);
    dataResultRef.current.style.display = "none";
    inputChannge.current.value = "";
  }

  function searchIngBar(e) {
    //console.log(e.length, "sadjk")
    if (e?.length > 0 && searchedData?.data?.length != 0) {
      dataResultRef.current.style.display = "flex";
    } else if (searchedData?.data?.length == 0) {
      dataResultRef.current.style.display = "none";
    } else {
      dataResultRef.current.style.display = "none";
    }
    dispatch(getSearchingData(e));
  }

  return (
    <div className="middleSearch" ref={middleSearchRef}>
      <div className="searchSide">
        <Selection data={objData} />
        <div className="line"></div>
        <div className="searchResultCatch">
          <div className="searchING">
            <input
              type="text"
              placeholder="Search on lenny..."
              ref={inputChannge}
              onChange={(event) => searchIngBar(event.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="dataResult" ref={dataResultRef}>
            {searchedData?.data?.map(({ id, attributes }) => {
              return (
                <ThreeElements
                  key={id}
                  dataCreator={[attributes.title]}
                  dataBottom={[`$${attributes.price}`]}
                  image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                    attributes.images.data[0].attributes.url
                  }`}
                  handleId={() =>
                    catchId(
                      id,
                      attributes?.categories?.data[0]?.attributes?.title,
                      attributes.title,
                      attributes?.categories?.data[0]?.id
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
