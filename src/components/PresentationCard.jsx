import { Link } from 'react-router-dom'

function PresentationCard({ classe, link, picture, title, element }) {
	const hasSpecificClass = classe.includes('presentationCard-left-init')

	return (
		<article className={`${classe}`}>
			{!hasSpecificClass ? (
				<button>
					<Link to={link}>
						<img src={picture} alt={title} />
						<div>
							<h2>{title}</h2>
							<p>{element}</p>
						</div>
					</Link>
				</button>
			) : (
				<>
					<img src={picture} alt={title} />
					<div>
						<h2>{title}</h2>
						<p>{element}</p>
					</div>
				</>
			)}
		</article>
	)
}

export default PresentationCard
