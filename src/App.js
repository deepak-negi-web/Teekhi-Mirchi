import React from "react";
import { Header, Footer, Main } from "./Section";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;
