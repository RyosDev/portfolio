import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen box-border bg-[#161513] ">
      <Header></Header>
      <About></About>
      <Projects id="projects"></Projects>
      <Experience></Experience>
      <Footer id="contact"></Footer>
    </div>
  );
}

export default App;
1