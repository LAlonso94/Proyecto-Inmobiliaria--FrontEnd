import { ChakraProvider } from "@chakra-ui/react";
import Detail from "./routes/Detail/Detail";
import Home from "./routes/Home/Home";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Home />
        <Detail />
      </ChakraProvider>
    </div>
  );
}

export default App;
