import React from "react";
import Home from "./components/Home"
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <Header />
//       <Gallery />
//       {/* <Contact /> */}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
      <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="gallery/" element={<Gallery />} />
          {/* <Route path="blog" element={<Project />} /> */}
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
