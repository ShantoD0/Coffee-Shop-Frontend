import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import AddCoffee from './components/Add Coffee/AddCoffee.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    Component:App,
    children:[
      {
        index:true,
        Component:Home
      },{
        path:'/addCoffee',
        Component:AddCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
