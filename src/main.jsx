import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import Home from "./routes/Home/Home";
import Login from "./routes/Login";
import Register from "./components/Register/Register";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <Home /> },
  { name: "Detail", path: "/detalle/:id", element: <Detail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
