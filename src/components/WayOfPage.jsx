import "./wayOfPage.scss";
import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
//import { useSelector } from "react-redux";


const WayOfPage = () => {
  const [breadcrumbs, setBreadcrumbs] = React.useState();
 
  const location = useLocation();
  // const navigate = useNavigate();

  React.useEffect(() => {
    //Home / telephones / iphone
    const pathNames = location.pathname.split("/").filter(Boolean);
    const breadcrumbsArray = pathNames.map((elm, i) => {
      return {
        path: `/${pathNames.slice(0, i + 1).join("/")}`,
        label: elm[0].toUpperCase() + elm.slice(1),
      };
    });
    setBreadcrumbs(breadcrumbsArray);
  }, [location.pathname]);
  //console.log(breadcrumbs,"a")

//  const { oneCategory, filterObj} = useSelector((state) => state.categories);
 
 //console.log(filterObj)


  
  return (
    <Breadcrumbs separator=">" className="allBreadCrumbss my-Margin-container">
      <Link to="/" className="eachBreadCrumbs">
        Home
      </Link>
      {breadcrumbs &&
        breadcrumbs.map((elm, i) => {
          const cleanLabel = elm.label.replace(/%20/g, " "); // Replace percent signs with spaces
          if (Number(elm.label) ) {
            return null;
          }
          
          
          const isLastItem = i === breadcrumbs.length - 2;
          if (isLastItem) {
            return (
              <div key={i} className="lastBreadCrumbs">
                {cleanLabel}
              </div>
            );
          }
          //console.log(elm?.label, breadcrumbs,"aa")
          // if(oneCategory?.data?.length === 0 || filterObj?.categoryArray?.length >0 ){
          //     //console.log(filterObj)
          //   return null
          //   //console.log(test) 
          

          // } 
        
          return (
            <Link key={i} to={`${elm.path}/${breadcrumbs[1].label}`} className="eachBreadCrumbs">
              {Number(elm.label)  ? null : cleanLabel}
            </Link>
          );
        })}
    </Breadcrumbs>
  );
};

export default WayOfPage;
