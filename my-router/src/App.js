import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
