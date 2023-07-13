import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { User } from 'entities/User'

import { LangSwitcher } from 'features/LangSwitcher'
import { Notification } from 'features/Notification'

import { classNames } from 'shared/lib/classNames'
import { AppCircle } from 'shared/ui/AppCircle'

import { BtnVideo } from '../BtnVideo'
import { btnVideo } from '../const/desctiption'

import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()

	return (
		<nav className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.btns}>
				{btnVideo.map((item) => (
					<BtnVideo key={item.id}>
						<AppCircle>{item.svg}</AppCircle> {t(item.title)}
					</BtnVideo>
				))}
			</div>
			<LangSwitcher />
			<Notification />
			<User />
		</nav>
	)
}
