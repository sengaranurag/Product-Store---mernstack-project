import { Box , Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minHeight={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}

export default App;
