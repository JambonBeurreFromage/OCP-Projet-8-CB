import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollTop() {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		// Si le hash est vide, alors on scroll en haut de la page
		if (!hash) {
			window.scrollTo(0, 0)
		}
	}, [pathname, hash])

	return null
}

export default ScrollTop
