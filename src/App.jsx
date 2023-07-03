// import { Navbar, Container, Nav } from "react-bootstrap";
// import { useState } from "react";
// import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";
import store from "./App/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navigation />

        <Container>
          <Outlet />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
