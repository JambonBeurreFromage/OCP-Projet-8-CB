import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'

///Importation pages///
import Main from './pages/Main.jsx'
import Contact from './pages/Contact.jsx'
import Archives from './pages/Tools.jsx'
import NoPage from './pages/404.jsx'
// import Events from './pages/Events.jsx'
// import Team from './pages/Team.jsx'
// import Search from './pages/Search.jsx'

///Importation des components///
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

///Importation des outils///
import ScrollTop from './components/ScrollTop.jsx'
import Modal from 'react-modal'

// Définir l'élément racine pour l'accessibilité
Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<ScrollTop />
			<Routes>
				<Route path="/" element={<Main />} />
				{/* <Route path="/events" element={<Events />} />
				<Route path="/team" element={<Team />} />
				<Route path="/search" element={<Search />} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/tools" element={<Archives />} />
				<Route path="/*" element={<NoPage />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)
