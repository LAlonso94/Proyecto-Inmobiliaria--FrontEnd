import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

const router = createBrowserRouter([
  { name: "Landing", path: "/", element: <App /> },
  { name: "Login", path: "/login", element: <Logi /> },
  { name: "Registro", path: "/api/registro", element: <Register /> },
  { name: "Home", path: "/home", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
