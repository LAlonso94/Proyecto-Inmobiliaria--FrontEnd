import Login from "./components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Login />
        {/* <Register /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
