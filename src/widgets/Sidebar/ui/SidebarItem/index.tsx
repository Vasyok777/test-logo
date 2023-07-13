import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames'

import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
	to: string
	svg: JSX.Element
	name: string
	onClick?: () => void
}

const SidebarItem: FC<SidebarItemProps> = ({ to, svg, name, onClick }) => {
	const location = useLocation()
	const { t } = useTranslation()
	const isActive = location.pathname === to
	const handleClick = () => {
		if (onClick) {
			onClick()
		}
	}
	return (
		<li
			className={classNames(cls.sidebar__item, { [cls.active]: isActive }, [])}
		>
			<Link to={to} onClick={handleClick}>
				<div className={cls.svg}>{svg}</div>
				{t(name)}
			</Link>
		</li>
	)
}

export default SidebarItem
