import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import BlogFormPage from './pages/BlogFormPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<BlogPage />} />
        <Route path="/form" exact element={<BlogFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
