/////////////////Imports/////////////////////
import { useState } from 'react'

/////////////////Imports objets/////////////////////
import arrow from '../assets/arrow.png'

function Carrousel({ title, pictures }) {
	const [imgIndex, setImgIndex] = useState(0)

	// fonction image précédente
	function clickG(e) {
		let newIndex = imgIndex - 1

		e.preventDefault()
		if (newIndex === -1) {
			newIndex = pictures.length - 1
			setImgIndex(newIndex)
		} else {
			setImgIndex(newIndex)
		}
	}

	//fonction image suivante
	function clickD(e) {
		let newIndex = imgIndex + 1

		e.preventDefault()
		if (newIndex === pictures.length) {
			newIndex = 0
			setImgIndex(newIndex)
		} else {
			setImgIndex(newIndex)
		}
	}

	return (
		<div className="carrousel">
			{/* Affiche l'image selon le numéro d'index */}
			<img
				src={pictures[imgIndex]}
				alt={title + ` vue n° ` + (imgIndex + 1)}
				className="carrousel__img"
			/>

			{/* affiche les commande du carrousel uniqument si le nombre d'images est > 1 */}
			<>
				{pictures.length > 1 ? (
					<>
						{/* bouton gauche */}
						<button
							className="carrousel__button left"
							onClick={(e) => clickG(e)}
						>
							<img src={arrow} alt="Flêche précédente" />
						</button>

						{/* compteur d'images */}
						<span className="carrousel__index">
							{imgIndex + 1}/{pictures.length}
						</span>

						{/* bouton droit */}
						<button
							className="carrousel__button right"
							onClick={(e) => clickD(e)}
						>
							<img src={arrow} alt="Flêche suivante" />
						</button>
					</>
				) : null}
			</>
		</div>
	)
}

export default Carrousel
