import Login from "./routes/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./routes/Register";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Login />
        <Register />
      </ChakraProvider>
    </div>
  );
}

export default App;
