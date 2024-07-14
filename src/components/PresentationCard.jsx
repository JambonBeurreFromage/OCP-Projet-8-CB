function PresentationCard({ classe, picture, title, element }) {
	return (
		<section className={`presentationCard ${classe}`}>
			<article>
				<img src={picture} alt={title} />
				<div>
					<h2>{title}</h2>
					<p>{element}</p>
				</div>
			</article>
		</section>
	)
}

export default PresentationCard
