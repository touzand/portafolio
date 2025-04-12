import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TransitionProvider } from "./context/transitionContext";

import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router basename="/">
        <TransitionProvider>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:title" element={<Article />} />
            </Routes>
          </>
        </TransitionProvider>
      </Router>
    </>
  );
};

export default App;
