import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

//  Styles
import './Home.css'

const Home = () => {
  const url = 'http://localhost:3000/articles'
  const { data: articles, isPending, error } = useFetch(url)
  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className='card'>
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  )
}

export default Home
