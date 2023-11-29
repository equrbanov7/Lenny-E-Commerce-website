import WayOfPage from "../../components/WayOfPage"
import FilterAndProducts from "./components/FilterAndProducts"

import SearchHeadInfo from "./components/SearchHeadInfo"
import "./searchResult.scss"
import { useParams } from "react-router-dom"

const SearchResult = () => {
  const {search}  =useParams()

  function closeFilter(){
    
    const showingElement=document.querySelector(".catchFilterAll");
    showingElement.classList.remove("filterMobile1");
    const overlayElm= document.querySelector(".ovarley1")
    overlayElm.classList.toggle("changeOpacity1")
    
   // console.log("ovarleyyy")
  }
  //console.log(search, '+++++++');
  
  return (
    <div className="searchResultMainCss my-SpesficContainer my-Margin-container ">
      <WayOfPage />
      <SearchHeadInfo />
      <FilterAndProducts searchId={search} />
      <div className="ovarley1" onClick={closeFilter}></div>
    </div> 
  )
}

export default SearchResult