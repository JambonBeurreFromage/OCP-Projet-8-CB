import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import logo from '../assets/beletteMarron256.png'

function Nav({ classNameComponent }) {
	const location = useLocation()
	const [openMenu, setOpenMenu] = useState(null)

	const handleMouseEnter = (menu) => {
		setOpenMenu(menu)
	}

	const handleMouseLeave = () => {
		setOpenMenu(null)
	}

	return (
		<nav className={`navComponent ${classNameComponent}`}>
			<img src={logo} alt="Logo de la page" />
			<ul>
				<li
					onMouseEnter={() => handleMouseEnter('menu1')}
					onMouseLeave={handleMouseLeave}
				>
					<Link
						to="/"
						className={`${
							location.pathname === '/'
								? 'header__nav-select'
								: ''
						} ${openMenu === 'menu1' ? 'openMenu' : ''}`}
					>
						Accueil
					</Link>

					{/* Sous menu de la navigation */}
					{/* <ul
						className={`navComponent__subMenu ${
							openMenu === 'menu1'
								? 'navComponent__subMenu-open'
								: ''
						}`}
					>
						<li className={`navComponent__subMenu-li`}>
							{' '}
							<Link
								to={'/events'}
								className="navComponent__subMenu-li-a"
							>
								Evénement
							</Link>
						</li>
						<li className="navComponent__subMenu-li">
							<Link
								to={'/team'}
								className="navComponent__subMenu-li-a"
							>
								Notre équipe
							</Link>
						</li>
						<li className="navComponent__subMenu-li">
							<Link
								to={'/search'}
								className="navComponent__subMenu-li-a"
							>
								Recherches
							</Link>
						</li>
					</ul> */}
				</li>
				<li>
					<Link
						to="/tools"
						className={
							location.pathname === '/tools'
								? 'header__nav-select'
								: ''
						}
					>
						Technologies
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						className={
							location.pathname === '/contact'
								? 'header__nav-select'
								: ''
						}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
