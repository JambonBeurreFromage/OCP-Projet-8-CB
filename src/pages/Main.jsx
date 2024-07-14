import { useEffect, useState } from 'react'

///Impotation component///
import PresentationCard from '../components/PresentationCard.jsx'

///Importation objets///
import portrait from '../assets/gregory.jpg'
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
			<PresentationCard
				classe={`presentationCard-left-init ${
					scroll ? 'presentationCard-left' : ''
				}`}
				picture={portrait}
				title={team[0].title}
				element={team[0].content}
			/>
		</main>
	)
}

export default Main
