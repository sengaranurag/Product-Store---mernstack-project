import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Createpage from "./Pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minHeight={"100vh"} bg={useColorModeValue("black.200", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<Createpage/>} />
      </Routes>
    </Box>
  );
}

export default App;
