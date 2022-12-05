import React from "react";
import { Provider } from "chakra-ui-carousel";
import fotos from "./fotos";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { LeftButton, RightButton } from "chakra-ui-carousel";

function ModalProperty() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const propertyImage = ({ slides }) => {
    return (
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return <Image src={slide.image} height="auto" width="800px" />;
        })}
      </Carousel>
    );
  };

  return (
    <>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box>

      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Operación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>HOLA</Text>
          </ModalBody>

          <Box>
            <Provider>
              <Box w="100%" p={4} color="white">
                <propertyImage slides={fotos} />
              </Box>
            </Provider>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalProperty;
