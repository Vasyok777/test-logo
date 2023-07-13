import { FC } from 'react'

import { classNames } from 'shared/lib/classNames'

import cls from './AppLogo.module.scss'

interface AppLogoProps {
	className?: string
}

export const AppLogo: FC<AppLogoProps> = ({ className }) => {
	return <div className={classNames(cls.logo, {}, [className])}>Logo</div>
}
