/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./productMenu.scss";
import DetailProduct from "./component/DetailProduct";
import Merchant from "./component/Merchant";
import Review from "./component/Review";
import RelatedProducts from "../../../components/RelatedProducts";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ProductMenu = ({catchId}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="catchMenuAllItems">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="menuNameProduct"
              label="Detail Product"
              {...a11yProps(0)}
            />
            <Tab
              className="menuNameProduct"
              label="Merchant"
              {...a11yProps(1)}
            />
            <Tab
              className="menuNameProduct"
              label=" Reviews"
              {...a11yProps(2)}
            />
            <Tab
              className="menuNameProduct"
              label=" Related Product"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <DetailProduct infoId={catchId} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Merchant />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Review />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <RelatedProducts />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default ProductMenu;
