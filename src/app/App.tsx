import { Outlet } from 'react-router-dom'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
	return (
		<div className="app">
			<Sidebar />
			<div className="main-content">
				<div className="container">
					<header className="header">
						<Navbar />
					</header>
					<main>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	)
}
