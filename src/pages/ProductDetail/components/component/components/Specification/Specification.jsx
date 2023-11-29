import "./specification.scss";

const Specification = () => {
  return (
    <div className="Specification">
    <h3 className="spesficTitleTop">Specification</h3>
  
    <table className="specificationTable">
      <tr className="eachLineTable">
        <td className="spesficTitle">Brand</td>
        <td className="resultTd">Logitec</td>
      </tr>
      <tr className="eachLineTable">
        <td className="spesficTitle">Type</td>
        <td className="resultTd">Wired</td>
      </tr>
      <tr className="eachLineTable">
        <td className="spesficTitle">Resulution</td>
        <td className="resultTd">100-25600 dpi</td>
      </tr>
      <tr className="eachLineTable">
        <td className="spesficTitle">Max Speed</td>
        <td className="resultTd">{`&gt;40G2`}</td>
      </tr>
      <tr className="eachLineTable">
        <td className="spesficTitle">Max Acceleration</td>
        <td className="resultTd">{`&gt;300 IPS`}</td>
      </tr>
    </table>
  </div>
  
  );
};

export default Specification;
