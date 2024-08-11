import { useEffect, useState } from 'react'
import PresentationCard from '../components/PresentationCard.jsx'
import pins from '../assets/pins.jpg'
import rocket from '../assets/rocket.png'
import coverProjet1 from '../assets/cover_projects/projet_1.jpg'
import coverProjet2 from '../assets/cover_projects/projet_2.jpg'
import coverProjet3 from '../assets/cover_projects/projet_3.jpg'
import arrow from '../assets/arrow.png'
import team from '../data/team.json'
import picturesBDD from '../data/pictures.json'

function Main() {
	const [scroll, setScroll] = useState(false)
	const [showCards, setShowCards] = useState(false)

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

	//Permet de remonter en haut de page au clique
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	//Permet d'ajouter une classe pour faire apparaitre les éléments au click
	const handleTitleClick = () => {
		setShowCards((prevState) => !prevState)

		const cards = document.querySelectorAll('.presentationCard-element')
		cards.forEach((card, index) => {
			setTimeout(() => {
				if (showCards) {
					// Enlève la classe si elle est déjà présente (pour le second clic)
					card.classList.remove('presentationCard-element-show')
				} else {
					// Ajoute la classe avec un délai entre chaque élément
					card.classList.add('presentationCard-element-show')
				}
			}, index * 200) // 200ms de délai entre chaque carte
		})
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
				{/* Card de présentation */}
				<div
					className={`main__presentationCard__title ${
						showCards ? 'main__presentationCard__title-open' : ''
					}`}
					onClick={handleTitleClick}
				>
					<h3>Découvrez nos réalisations</h3>
					<img src={arrow} alt="flêche à droite" />
				</div>

				<PresentationCard
					//Si on click sur le title (showCard vaut vrai) on passe la classe pour mettre inline les presentation card
					//Puis appel de la fonction pour passer l'opacité à 1, évite les bug d'affichage
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-inline' : ''
					}`}
					picture={coverProjet1}
					title={"Site d'architecte"}
					element={
						'Mise en avant des projets avec une galerie photos'
					}
					data={picturesBDD[0]}
				/>

				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-inline' : ''
					}`}
					picture={coverProjet2}
					title={'Site de location immobilière'}
					element={'Fiches produits et présentation'}
					data={picturesBDD[1]}
				/>
				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-inline' : ''
					}`}
					picture={coverProjet3}
					title={'Site de notation de livres'}
					element={'Création de bases de données'}
					data={picturesBDD[2]}
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
