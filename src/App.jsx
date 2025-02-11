/// <reference types="vite-plugin-svgr/client" />
import '@/App.css';
import { TooltipProvider } from '@/components/ui/tooltip';

import NavBar from '@/components/NavBar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Minis from '@/components/Minis';
import Footer from '@/components/Footer';

function App() {
	return (
		<TooltipProvider>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Minis />
			<Footer />
		</TooltipProvider>
	);
}

export default App;
