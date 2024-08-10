// import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal'

import Carrousel from './Carrousel'

function PresentationCard({ classe, picture, title, element, children }) {
	const hasSpecificClass = classe.includes('presentationCard-left-init')

	const [modalIsOpen, setModalIsOpen] = useState(false)
	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	return (
		<article className={`${classe}`}>
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
							<h4>test</h4>
							<div>
								<Carrousel title={'ok'} pictures={children} />
							</div>
							<button
								className="close-modal-button"
								onClick={closeModal}
							>
								Close Modal
							</button>
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
