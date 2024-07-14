import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

///Importation components ///
import Nav from '../components/Nav.jsx'

///Importation objets///

function Header() {
	const location = useLocation()
	const [showHeader, setShowHeader] = useState(true)
	const [scroll, setScroll] = useState(false)

	//A chaque modification de l'url, vérifie si nous sommes sur l'exposition pour masquer ou non la nav
	useEffect(() => {
		location.pathname === '/exhibition'
			? setShowHeader(false)
			: setShowHeader(true)
	}, [location])

	//Vérifie la position du scroll par rapport au debut de page et change la valeur scroll pour valider les conditions de classe dans la partie HTML
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const navHeight = 50
			if (scrollTop > navHeight) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	if (showHeader) {
		return (
			<header className="header">
				<>
					<div className="header__cover">
						<Link to="/">
							<h1>
								<span id="title1">Cerle</span>
								<span id="title2">Historique</span>
								<span id="title3">Quercitain</span>
							</h1>
						</Link>
					</div>

					<>
						<Nav
							classNameComponent={`${
								scroll ? 'header__nav-scroll' : ''
							}`}
						/>
					</>
				</>
			</header>
		)
	} else {
		return <header>Exposition</header>
	}
}

export default Header
