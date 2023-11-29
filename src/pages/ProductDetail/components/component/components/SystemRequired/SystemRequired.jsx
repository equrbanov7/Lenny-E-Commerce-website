import EachLineSysRequred from "./component/EachLineSysRequred";
import "./systemRequired.scss";

const SystemRequired = () => {
  return (
    <div className="SystemRequiredAll">
      <h3 className="titleOfRequired">System Required</h3>

      <div className="catchEachSysRequireds">
        <EachLineSysRequred data={"USB port"} />
        <EachLineSysRequred
          data={"Internet access for optional software download"}
        />
        <EachLineSysRequred data={"Windows® 10 or later"} />
        <EachLineSysRequred data={"macOS 10.14 or later"} />
      </div>
    </div>
  );
};

export default SystemRequired;
