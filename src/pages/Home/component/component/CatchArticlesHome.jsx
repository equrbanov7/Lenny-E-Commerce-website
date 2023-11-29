import React from "react";
import ArticleCradHome from "../../../../components/ArticleCradHome"
import "./catchArticlesHome.scss"
import { getArticles } from "../../../../api/articles";

const CatchArticlesHome = () => {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
      async function getAllArticles() {
        const data = await getArticles();
  
        setArticles(data);
        // console.log(data, "++++")
      }
      getAllArticles();
    }, []);
    // console.log(articles)
  return (
    <div className="AllArticleforHome">
       {articles?.data?.map(({ id, attributes }) => {
        return (
          <ArticleCradHome
            key={id}
            title={attributes.title}
            desc={attributes.description}
            date={attributes.date}
            Image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
              attributes.image.data.attributes.url
            }`}
          />
        );
      })}
    </div>
  )
}

export default CatchArticlesHome