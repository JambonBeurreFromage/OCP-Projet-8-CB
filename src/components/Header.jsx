import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

///Importation components ///
import Nav from '../components/Nav'

///Importation objets///
import logo from '../assets/logo.png'

function Header() {
	const location = useLocation()
	const [showNav, setShowNav] = useState(true)

	//A chaque modification de l'url, vérifie si nous sommes sur l'exposition pour masquer ou non la nav
	useEffect(() => {
		location.pathname === '/exhibition'
			? setShowNav(false)
			: setShowNav(true)
	}, [location])

	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="logo du site : cerle bicolor" />
			</Link>

			{showNav && <Nav />}
		</header>
	)
}

export default Header
