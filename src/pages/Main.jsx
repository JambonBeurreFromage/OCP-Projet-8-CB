import { useEffect, useState } from 'react'

///Impotation component///
import PresentationCard from '../components/PresentationCard.jsx'

///Importation objets///
import portrait from '../assets/gregory.jpg'
import coverEvents from '../assets/events.jpg'
import coverTeam from '../assets/team.jpg'
import coverArchive from '../assets/archives.webp'
import team from '../data/team.json'

function Main() {
	const [scroll, setScroll] = useState(false)

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

	return (
		<main className="main">
			<section>
				<PresentationCard
					classe={`presentationCard-left-init ${
						scroll ? 'presentationCard-left' : ''
					}`}
					picture={portrait}
					title={team[0].title}
					element={team[0].content}
				/>
			</section>

			<section className="main__presentationCard">
				<PresentationCard
					classe={`presentationCard-element`}
					link={'/events'}
					picture={coverEvents}
					title={'Evénement'}
					element={'Retrouvez nos évévements ici'}
				/>
				<PresentationCard
					classe={`presentationCard-element`}
					link={'/team'}
					picture={coverTeam}
					title={'Notre équipe'}
					element={
						"L'Histoire et Le Quesnoy au coeur de notre passion"
					}
				/>
				<PresentationCard
					classe={`presentationCard-element`}
					link={'/search'}
					picture={coverArchive}
					title={'Recherches'}
					element={"Nos actions de collecte d'informations"}
				/>
			</section>
		</main>
	)
}

export default Main
