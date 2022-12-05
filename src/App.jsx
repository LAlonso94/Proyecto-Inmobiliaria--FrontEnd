import Login from "./routes/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./components/Register/Register";
import Home from "./routes/Home/Home";
import DeleteEstate from "./components/Delete/DeleteEstate";

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
