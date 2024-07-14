// import { useState } from 'react'

///importation objets///
import arrow from '../assets/arrow.png'

//importation components///

function Collapse({ classe, name, elements, open, deploye }) {
	// const [open, setOpen] = useState(false)

	// function deploye() {
	// 	setOpen(!open)
	// }

	return (
		<div className={`collapse collapse-${classe}`}>
			{/* Element d'entête du collapse : titre et bouton avec flêche */}
			<button
				onClick={deploye}
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
