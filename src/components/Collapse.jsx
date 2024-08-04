///importation objets///
import arrow from '../assets/arrow.png'

function Collapse({ classe, name, elements, open, deploye }) {
	// Fonction combinée qui appelle deploye et ScrollToAnchor
	const handleClick = () => {
		deploye() // Appel de la fonction deploye
	}

	return (
		<div className={`collapse collapse-${classe}`} id={name}>
			{/* Element d'entête du collapse : titre et bouton avec flêche */}
			<button
				onClick={handleClick}
				className={
					open
						? `collapse__head-${classe} collapse__head-open-${classe}`
						: `collapse__head-${classe}`
				}
			>
				<h2>{name}</h2>

				<img
					src={arrow}
					alt="Flêche"
					className={`collapse__arrow${
						open ? '-open-' : '-'
					}${classe}`}
				/>
			</button>
			{open && (
				<div className={`collapse__element-${classe}`}>{elements}</div>
			)}
		</div>
	)
}

export default Collapse
