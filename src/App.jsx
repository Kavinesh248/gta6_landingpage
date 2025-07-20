import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-6xl text-blue-500 font-bold">
          Welcome to the GSAP
        </h1>
      </div>
    </main>
  );
};

export default App;
