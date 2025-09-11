import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "@fontsource/inter";
import Ideas from "../components/Ideas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submit from "../components/Submit";
import IdeaList from "../components/IdeaList";
import ViewIdea from "../components/ViewIdea";
import Footer from "../components/Footer";
import About from "../components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fff0dc]">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Ideas />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/ideas" element={<IdeaList />} />
          <Route path="/ideas/:id" element={<ViewIdea />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
