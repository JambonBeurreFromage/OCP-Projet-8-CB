import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

///COMPONENTS
import PresentationCard from '../components/PresentationCard.jsx'
import Collapse from '../components/Collapse.jsx'

///IMAGES
import pins from '../assets/pins.jpg'
import rocket from '../assets/rocket.png'
import coverProjet1 from '../assets/cover_projects/projet_1.jpg'
import coverProjet2 from '../assets/cover_projects/projet_2.jpg'
import coverProjet3 from '../assets/cover_projects/projet_3.jpg'
import arrow from '../assets/arrow.png'

///DATA
import team from '../data/team.json'
import picturesBDD from '../data/pictures.json'
import dev1 from '../data/devtoolsprojet1.json'
import dev2 from '../data/devtoolsprojet2.json'
import dev3 from '../data/devtoolsprojet3.json'

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
				>
					<Link to="/tools"> En savoir plus</Link>💬
				</PresentationCard>
			</section>

			<section className="project-steps">
				<h2 className="project-steps__title">
					Votre projet étape par étape
				</h2>
				<article className="project-steps__list">
					<div className="project-step">
						<div className="project-step__number">1</div>
						<h3 className="project-step__title">
							Définition de votre projet
						</h3>
						<p className="project-step__description">
							Déterminer les objectifs principaux, identifier le
							public cible, discuter des fonctionnalités, fixer un
							budget et un calendrier.
						</p>
					</div>
					<div className="project-step">
						<div className="project-step__number">2</div>
						<h3 className="project-step__title">
							Conception d'une maquette sur mesure
						</h3>
						<p className="project-step__description">
							Création de wireframes, développement de prototypes
							interactifs, révisions et approbation par vos soins.
						</p>
					</div>
					<div className="project-step">
						<div className="project-step__number">3</div>
						<h3 className="project-step__title">
							Création des contenus
						</h3>
						<p className="project-step__description">
							Rédaction des textes, sélection des visuels,
							optimisation SEO.
						</p>
					</div>
					<div className="project-step">
						<div className="project-step__number">4</div>
						<h3 className="project-step__title">
							Développement du site
						</h3>
						<p className="project-step__description">
							Intégration des maquettes avec du code (technologies
							sélectionnées pour correspondre au mieux à vos
							besoins). Développement des fonctionnalités
							dynamiques dans un design moderne et interactif,
							adapté à tous les supports (mobile, tablette et
							ordinateur) et garantissant l’accessibilité à tous.
						</p>
					</div>

					<div className="project-step">
						<div className="project-step__number">5</div>
						<h3 className="project-step__title">
							Tests et ajustements
						</h3>

						<ul>
							<li>
								Tests de compatibilité et de performance :
								Vérification du fonctionnement sur différents
								navigateurs et appareils.
							</li>
							<li>
								Analyse de la vitesse de chargement, de
								l’accessibilité et de l’optimisation avec des
								outils d’audits puissants.
							</li>
							<li>
								Ajustement des fonctionnalités en grâce aux
								retours des testeurs.
							</li>
						</ul>
					</div>

					<div className="project-step">
						<div className="project-step__number">6</div>
						<h3 className="project-step__title">
							Mise en ligne et déploiement
						</h3>
						<p className="project-step__description">
							Sélection de la solution d’hébergement la plus
							adaptée à votre usage pour éviter des coûts
							inutiles. Assurance de la sécurité et de la
							stabilité de la solution retenue.
						</p>
					</div>

					<div className="project-step">
						<div className="project-step__number">7</div>
						<h3 className="project-step__title">
							Formation et documentation
						</h3>
						<p className="project-step__description">
							Formation à l’utilisation de votre nouveau site,
							tant sur ses fonctionnalités que sur ses
							possibilités de mise à jour.
						</p>
					</div>

					<div className="project-step">
						<div className="project-step__number">8</div>
						<h3 className="project-step__title">
							Suivi et maintenance
						</h3>
						<p className="project-step__description">
							Assurance du support technique, de la mise à jour et
							de l’évolution continue de votre site. Garantie par
							un contrat de maintenance établi sur mesure.
						</p>
					</div>
				</article>
			</section>
			<div id="realisation"></div>
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
				>
					<div className="presentationCard-element__detail">
						<span>Enjeux de ce projet :</span>
						<ul>
							<li>
								Mise en place de fonctionnalités pour les
								utilisateurs connectés
							</li>
							<li>
								Suppression et ajout d'éléments dans la base de
								données
							</li>
							<li>
								Sécurisation des sessions utilisateurs avec des
								tokens
							</li>
						</ul>
						<span> Dépôt gitHub : </span>
						<a
							href="https://github.com/JambonBeurreFromage/OCP-Projet-3-CB"
							target="_blank"
							rel="noopener noreferrer"
						>
							ici
						</a>
					</div>
					<Collapse
						classe={'archives'}
						name={'Outils utilisés'}
						children={dev1}
						// open={openCollapse === 'Réseau'}
						// deploye={() => changeCollapse('Réseau')}
					/>
				</PresentationCard>

				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-inline' : ''
					}`}
					picture={coverProjet2}
					title={'Site de location immobilière'}
					element={'Fiches produits et présentation'}
					data={picturesBDD[1]}
				>
					<div className="presentationCard-element__detail">
						<span>Enjeux de ce projet :</span>
						<ul>
							<li>Refonte totale du projet avec React</li>
							<li>Reponsivité et modernité de l'interface</li>
							<li>
								Utilisation de la logique "components" pour une
								WebApp rapide et légère
							</li>
						</ul>
						<span> Dépôt gitHub : </span>
						<a
							href="https://github.com/JambonBeurreFromage/OCP-Projet-5-CB"
							target="_blank"
							rel="noopener noreferrer"
						>
							ici
						</a>
					</div>
					<Collapse
						classe={'archives'}
						name={'Outils utilisés'}
						children={dev2}
						// open={openCollapse === 'Réseau'}
						// deploye={() => changeCollapse('Réseau')}
					/>
				</PresentationCard>

				<PresentationCard
					classe={`presentationCard-element ${
						showCards ? 'presentationCard-element-inline' : ''
					}`}
					picture={coverProjet3}
					title={'Site de notation de livres'}
					element={'Création de bases de données'}
					data={picturesBDD[2]}
				>
					<div className="presentationCard-element__detail">
						<span>Enjeux de ce projet :</span>
						<ul>
							<li>Conception complète d'un BackEnd</li>
							<li>Application des protocoles de sécurité</li>
							<li>Formalisation d'une base de données</li>
						</ul>
						<span> Dépôt gitHub : </span>
						<a
							href="https://github.com/JambonBeurreFromage/OCP-Projet-6-CB"
							target="_blank"
							rel="noopener noreferrer"
						>
							ici
						</a>
					</div>
					<Collapse
						classe={'archives'}
						name={'Outils utilisés'}
						children={dev3}
						// open={openCollapse === 'Réseau'}
						// deploye={() => changeCollapse('Réseau')}
					/>
				</PresentationCard>

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
