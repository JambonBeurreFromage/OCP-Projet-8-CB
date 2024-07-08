import { useState } from 'react'

///importation objets///
import arrow from '../assets/arrow.png'

function Collapse({ classe, name, elements }) {
	const [open, setOpen] = useState(false)

	function deploye() {
		setOpen(!open)
	}

	return (
		<div className="collapse">
			{/* Element d'entête du collapse : titre et bouton avec flêche */}
			<div
				onClick={deploye}
				className={open ? `${classe} ${classe}-open` : `${classe}`}
			>
				<h2>{name}</h2>
				<button className="collapse__button">
					<img
						src={arrow}
						alt="Flêche"
						className={
							open ? `${classe}__arrow-open` : `${classe}__arrow`
						}
					/>
				</button>
			</div>
			{open && <div>{elements}</div>}
		</div>
	)
}

export default Collapse
