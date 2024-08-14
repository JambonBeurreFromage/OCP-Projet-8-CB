// import { useState } from 'react'
import { Link } from 'react-router-dom'

///Impotation component///
import Collapse from '../components/Collapse.jsx'

///Importation objets///
import photo from '../assets/christian.jpg'
import dev from '../data/devtools.json'
import tools from '../data/tools.json'

function Archives() {
	// const [openCollapse, setOpenCollapse] = useState(null)

	// function changeCollapse(id) {
	// 	if (openCollapse === id) {
	// 		setOpenCollapse(null)
	// 	} else {
	// 		setOpenCollapse(id)
	// 	}
	// }

	return (
		<main className="archives">
			<section className="archives__portrait">
				<img src={photo} alt="Portrait du développeur" />
				<div>
					<h2>Le mot de présentation - Portrait d'un développeur</h2>
					<p>
						Après des études supérieures en génie logiciel et
						automatisme, j'ai suivi un parcours professionnel
						diversifié qui m'a conduit vers la relation clients,
						puis la gestion de projets en santé publique. Pendant 5
						ans, j'ai occupé le poste de chargé de projet, mais mon
						intérêt pour le développement informatique m'a
						finalement poussé à revenir vers ma passion première.{' '}
						<br /> <br />
						Ces expériences m'ont permis de développer des
						compétences solides en gestion, organisation et
						coordination, tout en affinant ma capacité à comprendre
						les besoins des utilisateurs et à concevoir des
						solutions efficaces pour y répondre.
						<br /> <br />
						Aujourd'hui, je vous propose de mettre ces compétences
						au service de votre projet. Vous trouverez sur cette
						page un aperçu des technologies et outils que j'utilise
						pour mener à bien les projets de développement.
					</p>
					<span>
						Vous pouvez également découvrir mes réalisations en
						<Link to="/#realisation"> page d'Accueil.🖱️</Link>
					</span>
				</div>
			</section>
			<section className="archives__nav">
				<Collapse
					classe="archives"
					name="Développement"
					// open={openCollapse === 'Dévloppement'}
					// deploye={() => changeCollapse('Dévloppement')}
				>
					{dev}
				</Collapse>

				<Collapse
					classe={'archives'}
					name={'Outils'}
					children={<p>test 2</p>}
					// open={openCollapse === 'Outils'}
					// deploye={() => changeCollapse('Outils')}
				>
					{tools}
				</Collapse>

				<Collapse
					classe={'archives'}
					name={'Compétences professionnelles'}
					children={<p>test 3</p>}
					// open={openCollapse === 'Réseau'}
					// deploye={() => changeCollapse('Réseau')}
				>
					{
						<div className="archives__skills-container">
							<ul className="archives__skills-list">
								<li className="archives__skills-item">
									<span>🧢</span>
									<span>Gestion de projet</span>
								</li>
								<li className="archives__skills-item">
									<span>✏️</span>
									<span>Rédaction</span>
								</li>
								<li className="archives__skills-item">
									<span>🖼️</span>
									<span>Création de maquette</span>
								</li>
								<li className="archives__skills-item">
									<span>📜</span>
									<span>Plan de développement</span>
								</li>
								<li className="archives__skills-item">
									<span>💱</span>
									<span>Suivi budgétaire</span>
								</li>
								<li className="archives__skills-item">
									<span>⚙️</span>
									<span>Coordination de ressources</span>
								</li>
							</ul>
						</div>
					}
				</Collapse>
			</section>
			{/* <nav className="archives__collapses">
				{texte.map((item, index) => (
					<Collapse
						key={index}
						classe={'archives'}
						name={item.title}
						children={item.content}
						open={openCollapse === item.id}
						deploye={() => changeCollapse(item.id)}
					/>
				))}
			</nav> */}
		</main>
	)
}

export default Archives
