import Login from "./routes/Login";
import { ChakraProvider, Modal } from "@chakra-ui/react";
import Register from "./routes/Register";
import Home from "./routes/Home";
import DeleteEstate from "./components/Delete/DeleteEstate";
import ModalProperty from "./components/Modal/Modal";
function App() {
  return (
    <div>
      <ChakraProvider>
        {/* <Home />
        <Login />
        <Register /> */}
        <ModalProperty />
      </ChakraProvider>
    </div>
  );
}

export default App;
