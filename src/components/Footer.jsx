import { Link } from 'react-router-dom'

import gitHub from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-section contact-info">
					<Link to="/contact">
						<h4>Contactez-moi 📫</h4>
						<p>Cliquez-ici</p>
					</Link>
				</div>

				<div className="footer-section social-links">
					<h4>& Suivez-moi sur</h4>
					<ul>
						<li>
							<img src={linkedIn} alt="Logo de LinkedIn" />
							<a
								href="https://www.linkedin.com/in/christian-basuyau-3503411a7/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<img src={gitHub} alt="Logo de GitHub" />
							<a
								href="https://github.com/JambonBeurreFromage"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>

				<div className="footer-section legal-info">
					<span>Mentions légales</span>
					<ul>
						<li>Nom Prénom</li>
						<li>Adresse</li>
						<li>Siret</li>
						<li>Hebergeur</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>2024 Christian Basuyau - ©️ Tous droits réservés.</p>
			</div>
		</footer>
	)
}

export default Footer
