import About from "./components/about";
import Skills from "./components/skills";
import ServiceOffer from "./components/ServiceOffer";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-primary">
        <About />
        <ServiceOffer />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
