import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

/// Importation components ///
import Nav from '../components/Nav.jsx'

/// Importation objets ///
import backgroundImageMain from '../assets/main_header_background.jpg'
import backgroundImageArchives from '../assets/tech_header_background.png'
// import backgroundImageTeam from '../assets/bgteam.jpg'
// import backgroundImageEvents from '../assets/bgevents.jpg'
// import backgroundImageResearch from '../assets/bgresearch.jpg'

function Header() {
	const location = useLocation()
	const [showHeader, setShowHeader] = useState(true)
	const [scroll, setScroll] = useState(false)
	const [backgroundImage, setBackgroundImage] = useState(backgroundImageMain)

	// A chaque modification de l'url, vérifie si nous sommes sur l'exposition pour masquer ou non la nav
	//Change le background du header selo la cible
	useEffect(() => {
		if (location.pathname === '/exhibition') {
			setShowHeader(false)
		} else {
			setShowHeader(true)
			switch (location.pathname) {
				case '/':
					setBackgroundImage(backgroundImageMain)
					break
				case '/archives':
					setBackgroundImage(backgroundImageArchives)
					break
				// case '/main/team':
				// 	setBackgroundImage(backgroundImageTeam)
				// 	break
				// case '/main/events':
				// 	setBackgroundImage(backgroundImageEvents)
				// 	break
				// case '/main/research':
				// 	setBackgroundImage(backgroundImageResearch)
				// 	break
				default:
					setBackgroundImage(backgroundImageMain)
					break
			}
		}
	}, [location])

	// Vérifie la position du scroll par rapport au debut de page et change la valeur scroll pour valider les conditions de classe dans la partie HTML
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY

			// Ajout de l'effet de parallaxe lors du scroll
			const parallaxFactor = -0.3 // Ajuste ce facteur pour contrôler l'effet de parallaxe

			const header = document.querySelector('.header.parallax')
			if (header) {
				header.style.backgroundPosition = `center ${
					scrollTop * parallaxFactor
				}px`
			}

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
			<header
				className={`header parallax ${
					scroll ? 'header__nav-scroll' : ''
				}`}
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<>
					<div className="header__cover">
						<Link to="/">
							<h1>
								{backgroundImage === backgroundImageMain && (
									<>
										<span id="title2">Votre projet</span>
										<span id="title3">notre</span>
										<span id="title1">Aventure...</span>
									</>
								)}
								{backgroundImage ===
									backgroundImageArchives && (
									<>
										<span id="title2">Technologies</span>
										<span id="title1">Utilisées</span>
									</>
								)}
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
