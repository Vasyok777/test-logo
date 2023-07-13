import { FC, ReactNode } from 'react'

import { classNames } from 'shared/lib/classNames'

import cls from './AppCircle.module.scss'

interface AppCircleProps {
	className?: string
	children?: ReactNode
}

export const AppCircle: FC<AppCircleProps> = ({ children, className }) => {
	return (
		<div className={classNames(cls.circle, {}, [className])}>{children}</div>
	)
}
