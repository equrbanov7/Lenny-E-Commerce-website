import "./IntheBox.scss";
import EachBoxLine from "./component/EachBoxLine";

const IntheBox = () => {
  return (
    <div className="catchAllIntheBox">
      <h3 className="titleOfInthebox">In The Box</h3>
      <div className="InTheBoxItems">
        <EachBoxLine data={"UG502 X LIGHTSPEED Wireless Gaming Mouse"} />
        <EachBoxLine data={"DPI-Shift button cover"} />
        <EachBoxLine data={"USB-C charging cable"} />
        <EachBoxLine data={"LIGHTSPEED USB-A receiver"} />
        <EachBoxLine data={"USB extension cable"} />
        <EachBoxLine data={"User Documentation"} />
      </div>
    </div>
  );
};

export default IntheBox;
