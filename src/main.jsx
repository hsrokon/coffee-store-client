import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './components/providers/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: '/coffee/:id',
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
