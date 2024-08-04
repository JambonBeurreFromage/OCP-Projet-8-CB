import { useState } from 'react'

///Impotation component///
import Collapse from '../components/Collapse.jsx'

///Importation objets///
import texte from '../data/texte.json'

function Archives() {
	const [openCollapse, setOpenCollapse] = useState(null)

	function changeCollapse(id) {
		if (openCollapse === id) {
			setOpenCollapse(null)
		} else {
			setOpenCollapse(id)
		}
	}

	return (
		<main className="archives">
			<nav className="archives__nav">
				<Collapse
					classe="archives"
					name="Projet 1"
					elements={`<p>test 1</p> ${texte[2].content}`}
					open={openCollapse === 'Projet 1'}
					deploye={() => changeCollapse('Projet 1')}
				/>

				<Collapse
					classe={'archives'}
					name={'Projet 2'}
					elements={<p>test 2</p>}
					open={openCollapse === 'Projet 2'}
					deploye={() => changeCollapse('Projet 2')}
				/>

				<Collapse
					classe={'archives'}
					name={'Projet 3'}
					elements={<p>test 3</p>}
					open={openCollapse === 'Projet 3'}
					deploye={() => changeCollapse('Projet 3')}
				/>
			</nav>
			{/* <nav className="archives__collapses">
				{texte.map((item, index) => (
					<Collapse
						key={index}
						classe={'archives'}
						name={item.title}
						elements={item.content}
						open={openCollapse === item.id}
						deploye={() => changeCollapse(item.id)}
					/>
				))}
			</nav> */}
		</main>
	)
}

export default Archives
