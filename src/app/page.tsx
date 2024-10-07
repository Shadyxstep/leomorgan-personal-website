import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';
import Letters from './components/Letters';

export default function Home() {
  return (
    <div>
      <Navbar/>     
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Landing />
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
