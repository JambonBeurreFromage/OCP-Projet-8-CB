import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

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

					<ul
						className={`navComponent__subMenu ${
							openMenu === 'menu1'
								? 'navComponent__subMenu-open'
								: ''
						}`}
					>
						<li className="navComponent__subMenu-li">
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
					</ul>
				</li>
				<li>
					<Link
						to="/exhibition"
						className={
							location.pathname === '/exhibition'
								? 'header__nav-select'
								: ''
						}
					>
						Exposition
					</Link>
				</li>
				<li>
					<Link
						to="/archives"
						className={
							location.pathname === '/archives'
								? 'header__nav-select'
								: ''
						}
					>
						Archives
					</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
