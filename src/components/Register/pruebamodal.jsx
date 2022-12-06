<>
  <Button onClick={onOpen}>Registrarse</Button>

  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Text fontSize="4xl" textAlign="center" variant="link">
          Registrarse
        </Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6>Nombre:</h6>
            <Input
              placeholder="Nombre"
              type="text"
              variant="filled"
              required
              {...register("nombre", { required: true })}
            />
            <h6>Correo electronico:</h6>
            <Input
              placeholder="E-mail"
              type="email"
              required
              {...register("email", { required: true, minLength: 8 })}
            />

            <h6>Contraseña:</h6>
            <Input
              placeholder="Contraseña"
              type="password"
              variant="filled"
              minLength="8"
              maxLength="20"
              required
              {...register("password", { required: true, minLength: 8 })}
            />
            <Button
              className="buttonLogin"
              colorScheme="red"
              mb={8}
              type="submit"
            >
              Crear cuenta
            </Button>
          </form>
        </div>
        <Text fontSize="1xl" textAlign="center">
          ¿Ya tienes cuenta?
        </Text>
        <Button
          variant="link"
          colorScheme="blue"
          onClick={() => navigate("/api/login")}
        >
          Iniciar sesión
        </Button>
        <FormControl display="flex" justifyContent="center">
          <Text htmlFor="dark_mode" fontSize="1xl" textAlign="center">
            Modo oscuro
          </Text>
          <Switch id="dark_mode" colorScheme="red" onChange={toggleColorMode} />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</>;

//////////////////////////////////////////return (
<div>
  <Flex
    className="container"
    h="100vh"
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      className="loginContainer"
      flexDirection="column"
      bg={formBackground}
      borderRadius={8}
    >
      <Text fontSize="4xl" textAlign="center">
        Registrarse
      </Text>
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6>Nombre:</h6>
          <Input
            placeholder="Nombre"
            type="text"
            variant="filled"
            required
            {...register("nombre", { required: true })}
          />
          <h6>Correo electronico:</h6>
          <Input
            placeholder="E-mail"
            type="email"
            required
            {...register("email", { required: true, minLength: 8 })}
          />

          <h6>Contraseña:</h6>
          <Input
            placeholder="Contraseña"
            type="password"
            variant="filled"
            minLength="8"
            maxLength="20"
            required
            {...register("password", { required: true, minLength: 8 })}
          />
          <Button
            className="buttonLogin"
            colorScheme="red"
            mb={8}
            type="submit"
          >
            Crear cuenta
          </Button>
        </form>
      </div>
      <Text fontSize="1xl" textAlign="center">
        ¿Ya tienes cuenta?
      </Text>
      <Button
        variant="link"
        colorScheme="blue"
        onClick={() => navigate("/api/login")}
      >
        Iniciar sesión
      </Button>
      <FormControl display="flex" justifyContent="center">
        <Text htmlFor="dark_mode" fontSize="1xl" textAlign="center">
          Modo oscuro
        </Text>
        <Switch id="dark_mode" colorScheme="red" onChange={toggleColorMode} />
      </FormControl>
    </Flex>
  </Flex>
</div>;
