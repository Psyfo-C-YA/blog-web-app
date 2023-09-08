
import DispayArticle from "../components/DispayArticle"

const DisplayPage = ({ArticleData}) => {
  return (
    <div>
       <h1>Featured articles</h1>
      <ul>
        {ArticleData.map((article) => (
          <DispayArticle key={article.id} ArticleData={article} />
        ))}
      </ul>
    </div>
  )
}

export default DisplayPage
