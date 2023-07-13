import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { classNames } from 'shared/lib/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
	MODAL = 'modal',
	CLEAR = 'clear',
	TARIFF = 'tariff',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}
export const Button: FC<ButtonProps & PropsWithChildren> = ({
	children,
	className,
	theme = ThemeButton.MODAL,
}) => {
	return (
		<button className={classNames(cls.button, {}, [className, cls[theme]])}>
			{children}
		</button>
	)
}
