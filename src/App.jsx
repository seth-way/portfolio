/// <reference types="vite-plugin-svgr/client" />
import '@/App.css';
import NavBar from '@/components/NavBar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Misc from '@/components/Misc';
import Footer from '@/components/Footer';

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Misc />
			<Footer />
		</>
	);
}

export default App;
