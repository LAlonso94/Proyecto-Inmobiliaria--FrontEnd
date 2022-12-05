import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import Home from "./routes/Home/Home";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Home />
        {/* <Login /> */}
        {/* <Register /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
