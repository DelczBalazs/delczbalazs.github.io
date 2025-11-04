import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

const App = () => {
    return (
        <div className="bg-app text-app min-h-dvh">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

export default App;
