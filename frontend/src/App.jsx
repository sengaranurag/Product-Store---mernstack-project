import { Box , Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box minHeight={"100vh"}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<Createpage/>}/>
      </Routes>
    </Box>
  )
}

export default App;
