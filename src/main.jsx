import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
//import "./index.css";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import Admin from "./routes/Admin/Admin";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Login from "./routes/Login/Login";
import { isAuth } from "./api/Rule_auth_users";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <Home /> },
  { name: "Login-Registro", path: "login", element: <Login /> },
  { name: "Detail", path: "detalle/:id", element: <Detail /> },
  {
    name: "Admin",
    path: "administrar",
    element: isAuth() ? <Admin /> : <Navigate replace to="/" />,
  },
  { name: "Error", path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
