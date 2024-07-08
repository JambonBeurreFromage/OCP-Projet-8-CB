import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'

///Importation pages///
import Main from './pages/Main.jsx'
import Exhibition from './pages/Exhibition.jsx'
import Archives from './pages/Archives.jsx'

///Importation des components///
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/exhibition" element={<Exhibition />} />
				<Route path="/archives" element={<Archives />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)
