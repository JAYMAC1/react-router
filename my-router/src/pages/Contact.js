import { useLocation } from 'react-router-dom'

const Contact = () => {
  const queryString = useLocation().search

  // javascript not react
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
  return (
    <div>
      <h2>Contact - Hello {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aliquid
        veritatis fuga tempora inventore iste deleniti, et ex aperiam ab.
      </p>
    </div>
  )
}

export default Contact
