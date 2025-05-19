import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import AddCoffee from "./components/Add Coffee/AddCoffee.jsx";
import UpdateCoffee from "./Update Coffee/UpdateCoffee.jsx";
import Details from "./Details/Details.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import CoffeeProvider from "./contexts/CoffeeProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add",
        Component: AddCoffee,
      },
      {
        path: "/update/:id",
        Component: UpdateCoffee,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
      {
        path:'/*',
        Component:NotFound
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <CoffeeProvider>
    <RouterProvider router={router} />
    </CoffeeProvider>
  </StrictMode>
);
