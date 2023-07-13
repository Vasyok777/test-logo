import { useEffect, useState } from 'react'

import { TariffPlan } from 'widgets/TariffPlan'

import { classNames } from 'shared/lib/classNames'
import { AppLogo } from 'shared/ui/AppLogo'

import SidebarItem from '../SidebarItem'
import { sidebarList } from '../const/SidebarDesc'

import cls from './Sidebar.module.scss'

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleItemClick = () => {
		if (isOpen) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isOpen])
	return (
		<>
			<div
				className={classNames(cls.burger, { [cls.active]: isOpen }, [])}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span></span>
			</div>
			<aside
				className={classNames(
					cls.sidebar,
					{ [cls.sidebar__mobile]: isOpen },
					[]
				)}
			>
				<AppLogo className={cls.sidebar__logo} />
				<nav>
					<ul className={cls.sidebar__list}>
						{sidebarList.map((item) => (
							<SidebarItem onClick={handleItemClick} key={item.id} {...item} />
						))}
					</ul>
				</nav>
				<TariffPlan className={cls.sidebar__tariff} />
			</aside>
		</>
	)
}
