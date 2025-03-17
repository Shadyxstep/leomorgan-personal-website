import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Letters from "./components/Letters";
import Circle from "./components/Circle";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="items-center justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-20 ">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="relative w-full">
            <Landing />
            <div className="absolute inset-0 pointer-events-none z-10">
              <Circle />
            </div>
          </div>
          <Letters />
          <About />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
