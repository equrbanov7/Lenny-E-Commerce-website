import TitleDescription from "./TitleDescription";
import "./articleCradHome.scss";

// eslint-disable-next-line react/prop-types
const ArticleCradHome = ({ Image, date, title, desc }) => {
  return (
    <div className="articleCardHomeItem">
      <div className="topofArticleImg">
        <img src={Image} alt="articleImage" />
      </div>
      <div className="bottomofArticleInfo">
        <p className="dataArticle">
          <span>{date} </span>
        </p>
        <TitleDescription title={title} desc={desc} />
      </div>
    </div>
  );
};

export default ArticleCradHome;
