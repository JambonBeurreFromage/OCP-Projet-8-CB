///Impotation component///
import Collapse from '../components/Collapse'

///Importation objets///
import texte from '../data/texte.json'

function Main() {
	return (
		<main className="main">
			<h1>Cercle Historique Quercitain</h1>
			<Collapse
				classe={'collapse__main'}
				name={texte[0].title}
				elements={texte[0].content}
			/>
			<Collapse
				classe={'collapse__main'}
				name={texte[1].title}
				elements={texte[1].content}
			/>
			<Collapse
				classe={'collapse__main'}
				name={texte[2].title}
				elements={texte[2].content}
			/>
		</main>
	)
}

export default Main
