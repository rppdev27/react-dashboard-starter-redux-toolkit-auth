// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, createBrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Tamu from './pages/Tamu'
import Hadiah from './pages/Hadiah'
import Musik from './pages/Musik'
import Undangan from './pages/Undangan'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/product/:userID',
    element: <Product/>
  },
  {
    path: '/undangan',
    element: <Undangan/>
  },
  {
    path: '/tamu',
    element: <Tamu/>
  },
  {
    path: '/hadiah',
    element: <Hadiah/>
  },
  {
    path: '/musik',
    element: <Musik/>
  },
  

])

function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
        />
        <Route 
            path='/undangan' 
            element={
            <PrivateRoute>
                  <Undangan/>
            </PrivateRoute>
            }/>
        <Route 
            path='/tamu' 
            element={
            <Tamu/>
        }/>
        <Route 
            path='/hadiah' 
            element={<Hadiah/>}
        />
        <Route 
          path='/musik' 
          element={<Musik/>}
        />
      </Routes>
    </Router>
  )

}

export default App
