import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import Browse from "./routes/browse";
import Collections from "./routes/collections";
import Root from "./routes/root";
import Login from "./routes/login";
import About from "./routes/about";
import Collection from "./routes/collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "collections/:collectionId",
        element: <Collection />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
