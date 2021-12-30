import Header from "./component/Header";
import Home from "./component/home/Home";
import { Box } from "@mui/material";
import { DetailView } from "./component/detail/DetailView";
import { CreateView } from "./component/create/CreateView";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<DetailView />} />
          <Route exact path="/create" element={<CreateView />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
