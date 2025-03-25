import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { Contact } from './components/section/contact';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About'
import {Projects} from './components/section/projects'

function App() {
  const[isLoaded, setIsLoaded] = useState(false)
  const[menuOpen, setmenuOpen] = useState(false)
 

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
        }bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
          <Home/>
          <About />
          <Projects/>
          <Contact/>

      </div>
    </>
  );
}

export default App
