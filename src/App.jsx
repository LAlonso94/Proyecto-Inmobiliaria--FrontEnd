import Login from "./routes/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./routes/Register";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Home />
        {/* <Login />
        <Register /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
