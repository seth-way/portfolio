import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
