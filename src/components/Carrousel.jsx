import { useState } from 'react'
import arrow from '../assets/arrow.png'

function Carrousel({ title, pictures }) {
	const [imgIndex, setImgIndex] = useState(0)

	// fonction image précédente
	function clickG(e) {
		e.preventDefault()
		let newIndex = imgIndex - 1
		if (newIndex === -1) {
			newIndex = pictures.length - 1
		}
		setImgIndex(newIndex)
	}

	// fonction image suivante
	function clickD(e) {
		e.preventDefault()
		let newIndex = imgIndex + 1
		if (newIndex === pictures.length) {
			newIndex = 0
		}
		setImgIndex(newIndex)
	}

	// const test = () => {
	// 	console.log(pictures)
	// }

	return (
		<div className="carrousel">
			{/* <button onClick={test}>Test</button> */}
			<img
				src={pictures[imgIndex]}
				alt={title + ` vue n° ` + (imgIndex + 1)}
				className="carrousel__img"
			/>
			{pictures.length > 1 && (
				<>
					<button className="carrousel__button left" onClick={clickG}>
						<img src={arrow} alt="Flèche précédente" />
					</button>
					<span className="carrousel__index">
						{imgIndex + 1}/{pictures.length}
					</span>
					<button
						className="carrousel__button right"
						onClick={clickD}
					>
						<img src={arrow} alt="Flèche suivante" />
					</button>
				</>
			)}
		</div>
	)
}

export default Carrousel
