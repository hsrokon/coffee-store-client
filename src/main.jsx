import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'


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
    path: '/updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
