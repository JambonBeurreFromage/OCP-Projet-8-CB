import { useState } from 'react'
import Modal from 'react-modal'
import Carrousel from './Carrousel'

function PresentationCard({ classe, picture, title, element, data, children }) {
	const hasSpecificClass = classe.includes('presentationCard-left-init')

	const [modalIsOpen, setModalIsOpen] = useState(false)
	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	// const test = () => {
	// 	console.log('Data:', data)
	// 	if (data && data.picture) {
	// 		console.log('Carrousel Pictures:', data.picture)
	// 	} else {
	// 		console.log('Data or data.picture is undefined')
	// 	}
	// }

	return (
		<article className={`${classe}`}>
			{/* <button onClick={test}>test</button> */}
			{!hasSpecificClass ? (
				<>
					<button onClick={openModal}>
						{/* <Link to={link}> */}
						{/* element de cover des cards */}
						<img src={picture} alt={title} />
						<div>
							<h4>{title}</h4>
							<p>{element}</p>
						</div>
						{/* </Link> */}
					</button>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal} // Ferme la modale lorsqu'on appuie sur la touche Échap
						shouldCloseOnOverlayClick={true} // Ferme la modale lorsqu'on clique sur l'overlay
						contentLabel="Example Modal"
						className="custom-modal"
						overlayClassName="custom-overlay"
					>
						<div className="modal-content">
							<button
								className="close-modal-button"
								onClick={closeModal}
							>
								X
							</button>
							<h4>{title}</h4>
							<div className="modal-content-background">
								<div className="modal-content-modale">
									<Carrousel
										title={title}
										pictures={
											data && data.picture
												? data.picture
												: []
										}
									/>
								</div>
								<div className="modal-content-texte">
									{data.content}
									{children}
								</div>
							</div>
						</div>
					</Modal>
				</>
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
