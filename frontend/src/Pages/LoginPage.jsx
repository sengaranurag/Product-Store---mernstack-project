import { Button,Input,VStack,Modal,ModalBody,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useToast,useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { onClose } = useDisclosure();

  const adminCredentials = {
    email: "admin@example.com",
    password: "admin123",
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      localStorage.setItem("isAdmin", "true");
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose(); 
      const redirectTo = location.state?.from?.pathname || "/admin";
      navigate(redirectTo);
    } else {
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleClose = () => {
    navigate("/"); 
  };

  const isLoginRoute = location.pathname === "/login";

  return (
    <>
      <Modal isOpen={isLoginRoute} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin Login</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={4} onClick={handleLogin}>
              Login
            </Button>
            <Button variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginPage;
