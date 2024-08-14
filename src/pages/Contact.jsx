import { useState } from 'react'

import emailjs from 'emailjs-com'

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [successMessage, setSuccessMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!emailRegex.test(formData.email)) {
			setErrorMessage('Veuillez entrer une adresse email valide.')
			return
		}

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text)
					setSuccessMessage(
						'Votre message a été envoyé avec succès !'
					)
					setErrorMessage('')
					setFormData({ name: '', email: '', message: '' })
				},
				(error) => {
					console.log(error.text)
					setSuccessMessage(
						'Une erreur est survenue, veuillez réessayer.'
					)
				}
			)
	}

	return (
		<div className="contact">
			<h2>Contactez-moi</h2>
			<form className="contact__form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nom:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					{errorMessage && <p className="error">{errorMessage}</p>}
				</div>
				<div>
					<label htmlFor="message">Votre projet :</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit">Envoyer</button>
			</form>
			{successMessage && <p>{successMessage}</p>}
		</div>
	)
}

export default Contact
