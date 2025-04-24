import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Posts from './pages/Posts'
import DefaultLayout from './layouts/DefaultLayout'
import SinglePost from './pages/posts/SinglePost'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ContextPosts from './context/ContextPosts'
import ContextAlert from './context/ContextAlert'

function App() {
  const alertData = {type: 'info', message: 'Nessun messaggio'};
  const [alert, setAlert] = useState(alertData);
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  function fetchPosts() {
    axios.get(url)
      .then(res => {
        setPosts(res.data);
        setAlert({
          type: 'success',
          message : 'post caricati con successo'
        });

      })
      .catch(err => {
        console.log(err);
        setAlert({
          type: 'failed',
          message: 'i post non sono stati trovati'
        });
      })
    
  }

  useEffect(fetchPosts, []);
  console.log(alert);

  return (
    <ContextPosts.Provider value={{ posts, setPosts }}>
      <ContextAlert.Provider value={{ alert, setAlert }}>
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
      </ContextAlert.Provider>
    </ContextPosts.Provider>
  )
}

export default App
