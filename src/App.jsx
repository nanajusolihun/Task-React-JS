// import { Navbar, Container, Nav } from "react-bootstrap";
// import { useState } from "react";
// import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home"


function App() {
  return (
    <>
      <Navigation />
      {/* <Home/> */}

      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
