import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Navbar/>     
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className='items-center'>
          <Landing />
      </div>
      <div className='items-center'>
          <About />
      </div>  
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       <h1>This is the footer</h1>
      </footer>
    </div>
    </div>
  );
}
