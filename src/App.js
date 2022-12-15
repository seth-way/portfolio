import Header from './Components/Header';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }, [])
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
