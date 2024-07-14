import { Link, useLocation } from 'react-router-dom'

function Nav({ classNameComponent }) {
	const location = useLocation()

	return (
		<nav className={`navComponent ${classNameComponent}`}>
			<ul>
				<li>
					<Link
						to="/"
						className={
							location.pathname === '/'
								? 'header__nav-select'
								: ''
						}
					>
						Accueil
					</Link>
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
