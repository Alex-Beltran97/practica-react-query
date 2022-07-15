import { useEffect, useState } from "react";
import { CircularProgress, Link } from "@mui/material";
import { Container } from "@mui/system";
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";

const App = () => {

  return (<>
    <h1>Posts</h1>
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Post />} />
        </Routes>
      </Router>
    </Container>
  </>);
};
 
export default App;