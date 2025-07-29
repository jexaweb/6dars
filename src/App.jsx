import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
// import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  let user = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />,
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/shop/",
          element: <Shop />,
        },
      ],
    },

    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
