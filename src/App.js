import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
