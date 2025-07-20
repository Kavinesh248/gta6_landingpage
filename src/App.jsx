import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
