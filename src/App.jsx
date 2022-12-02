import Login from "./routes/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./routes/Register";
import Home from "./routes/Home";

function App() {
  return (
    <div>
<<<<<<< HEAD
      <ChakraProvider>
        <Home />
=======
      {/* <Home /> */}
      <ChakraProvider>
>>>>>>> 3ac4aaf1cfde03105e0b85d94ee51a7f8f9792d4
        <Login />
        <Register />
      </ChakraProvider>
    </div>
  );
}

export default App;
