import { useEffect, useState } from 'react'

///Impotation component///
import PresentationCard from '../components/PresentationCard.jsx'

///Importation objets///
// import portrait from '../assets/christian.jpg'
import pins from '../assets/pins.jpg'
import rocket from '../assets/rocket.png'
import coverProjet1 from '../assets/projets/projet_1/screen_1.jpg'
import coverProjet2 from '../assets/projets/projet_2/screen_1.jpg'
import coverProjet3 from '../assets/projets/projet_3/screen_1.jpg'
import arrow from '../assets/arrow.png'
import team from '../data/team.json'

function Main() {
	const [scroll, setScroll] = useState(false)
	const [showCards, setShowwCards] = useState(false)

	//Permet de déclancher l'apparition de la premier carte de présentation au défilement
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const navHeight = 300
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

	//Permet de remonter en haut de la page au clique sur l'image rocket
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Utilisez 'smooth' pour un effet de défilement fluide
		})
	}

	const handleTitleClick = () => {
		setShowwCards(true)
	}

	return (
		<main className="main">
			<section>
				<PresentationCard
					classe={`presentationCard-left-init ${
						scroll ? 'presentationCard-left' : ''
					}`}
					picture={pins}
					title={team[0].title}
					element={team[0].content}
				/>
			</section>

			<section className="main__presentationCard">
				<div
					className="main__presentationCard__title"
					onClick={handleTitleClick}
				>
					<h3>Exemple de réalisations</h3>
					<img src={arrow} alt="flêche à droite" />
				</div>
				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-show' : ''
					}`}
					picture={coverProjet1}
					title={"Site d'architecte"}
					element={
						'Mise en avant des projets avec une galerie photos'
					}
					children={coverProjet1}
				/>

				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-show' : ''
					}`}
					picture={coverProjet2}
					title={'Site de location immobilière'}
					element={'Fiches produits et présentation'}
					children={coverProjet2}
				/>
				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-show' : ''
					}`}
					picture={coverProjet3}
					title={'Site de notation de livres'}
					element={'Création de bases de données'}
					children={coverProjet3}
				/>
				<img
					className={`rocket ${scroll ? '' : 'rocket--hidden'}`}
					src={rocket}
					alt="Fusée"
					onClick={handleClick}
				/>
			</section>
		</main>
	)
}

export default Main
