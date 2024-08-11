// import { useState } from 'react'

///Impotation component///
import Collapse from '../components/Collapse.jsx'

///Importation objets///
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
			<nav className="archives__nav">
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
			</nav>
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
