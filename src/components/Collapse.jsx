import { useState } from 'react'
///importation objets///
import arrow from '../assets/arrow.png'

function Collapse({ classe, name, children, open, deploye }) {
	// Fonction combinée qui appelle deploye et ScrollToAnchor
	// const handleClick = () => {
	// 	deploye() // Appel de la fonction deploye
	// }

	const [isOpen, setIsOpen] = useState(false)
	const handleClick = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}

	// Fonction pour vérifier si children est un tableau JSON
	const isJsonArray =
		Array.isArray(children) &&
		children.every((item) => item && typeof item === 'object' && item.id)

	return (
		<div className={`collapse collapse-${classe}`} id={name}>
			{/* Element d'entête du collapse : titre et bouton avec flêche */}
			<button
				onClick={handleClick}
				className={
					// open
					isOpen
						? `collapse__head-${classe} collapse__head-open-${classe}`
						: `collapse__head-${classe}`
				}
			>
				<h2>{name}</h2>

				<img
					src={arrow}
					alt="Flêche"
					className={`collapse__arrow${
						isOpen ? '-open-' : '-'
					}${classe}`}
				/>
			</button>
			{isOpen && (
				<div className={`collapse__element-${classe}`}>
					{isJsonArray
						? // Si children est un tableau JSON, utilisez map pour l'afficher
						  children.map((item) => (
								<div className="collapse-item" key={item.id}>
									<img
										src={item.image}
										alt={item.title}
										className="collapse-item__image"
									/>
									<div className="collapse-item__tooltip">
										{item.title} : {item.content}
									</div>
									<div className="collapse-item__progress-container">
										<div
											className="collapse-item__progress-bar"
											style={{
												width: `${item.level * 10}%`
											}}
										></div>
									</div>
								</div>
						  ))
						: // Sinon, affichez les enfants tels quels
						  children}
				</div>
			)}
		</div>
	)
}

export default Collapse
