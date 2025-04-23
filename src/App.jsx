import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Posts from './pages/Posts'
import DefaultLayout from './layouts/DefaultLayout'
import SinglePost from './pages/posts/SinglePost'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="posts">
              <Route index element={<Posts />} />
              <Route path=':id' element={<SinglePost />} />
            </Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
