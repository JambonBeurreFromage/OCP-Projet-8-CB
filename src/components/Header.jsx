import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

/// Importation components ///
import Nav from '../components/Nav.jsx'

/// Importation objets ///
import backgroundImageMain from '../assets/header_background_main.jpg'
import backgroundImageTools from '../assets/header_background_tech.png'
import backgroundImageContact from '../assets/header_background_contact.png'
// import backgroundImageTeam from '../assets/bgteam.jpg'
// import backgroundImageEvents from '../assets/bgevents.jpg'
// import backgroundImageResearch from '../assets/bgresearch.jpg'

function Header() {
	const location = useLocation()
	const [showHeader, setShowHeader] = useState(true)
	const [scroll, setScroll] = useState(false)
	const [backgroundImage, setBackgroundImage] = useState(backgroundImageMain)

	// Liste des chemins valides

	// À chaque modification de l'URL, vérifier si le chemin est valide
	useEffect(() => {
		const validPaths = [
			'/',
			'/tools',
			'/contact'
			// Ajoutez ici d'autres chemins valides si nécessaire
		]
		if (validPaths.includes(location.pathname)) {
			setShowHeader(true)
			//Change le background du header selo la cible
			switch (location.pathname) {
				case '/':
					setBackgroundImage(backgroundImageMain)
					break
				case '/tools':
					setBackgroundImage(backgroundImageTools)
					break
				case '/contact':
					setBackgroundImage(backgroundImageContact)
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
		} else {
			setShowHeader(false)
		}
	}, [location])

	// Vérifie la position du scroll par rapport au debut de page et change la valeur scroll pour valider les conditions de classe dans la partie HTML
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY

			// Ajout de l'effet de parallaxe lors du scroll
			const parallaxFactor = -1.3 // Ajuste ce facteur pour contrôler l'effet de parallaxe

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
						<h1>
							{backgroundImage === backgroundImageMain && (
								<>
									<span id="title2">Votre projet</span>
									<span id="title3">notre</span>
									<span id="title1">Aventure...</span>
								</>
							)}
							{backgroundImage === backgroundImageTools && (
								<>
									<span id="title2">Technologies</span>
									<span id="title1">Utilisées</span>
								</>
							)}
							{backgroundImage === backgroundImageContact && (
								<>
									<span id="title2">Prêt à lancer</span>
									<span id="title1">votre</span>
									<span id="title1">aventure ? 🚀</span>
								</>
							)}
						</h1>
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
		return null
	}
}

export default Header
