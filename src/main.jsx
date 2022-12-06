import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import Admin from "./routes/Admin/Admin";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <Home /> },
  { name: "Detail", path: "/detalle", element: <Detail /> },
  { name: "Admin", path: "/administrar", element: <Admin /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
