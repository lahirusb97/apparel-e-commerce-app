import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Category from "./pages/category/Category.jsx";
import Nav from "./components/Nav/Nav.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/:category",
    element: (
      <div>
        <Nav />
        <Category />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  // {
  //   path: "/:category/*",
  //   element: <Category />,
  //   errorElement: <div>error</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
