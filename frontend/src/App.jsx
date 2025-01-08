import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";

import Navbar from "./components/Navbar";
import Createpage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Box minHeight={"100vh"} bg={useColorModeValue("black.200", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route
            path="/create"
            element={
              <ProtectedRoute>
                <Createpage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <HomePage/>
              </ProtectedRoute>
            }
          />
      </Routes>
    </Box>
  );
}

export default App;
