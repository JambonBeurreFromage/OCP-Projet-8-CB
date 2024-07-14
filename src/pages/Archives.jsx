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
			<nav className="archives__collapses">
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
			</nav>
		</main>
	)
}

export default Archives
