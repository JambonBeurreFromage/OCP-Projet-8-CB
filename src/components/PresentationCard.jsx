function PresentationCard({ classe, picture, title, element }) {
	const hasSpecificClass = classe.includes('presentationCard-left-init')

	return (
		<article className={`${classe}`}>
			{!hasSpecificClass ? (
				<button>
					<img src={picture} alt={title} />
					<div>
						<h2>{title}</h2>
						<p>{element}</p>
					</div>
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
