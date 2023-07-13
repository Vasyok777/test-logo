import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppCircle } from 'shared/ui/AppCircle'

import cls from './Card.module.scss'

interface CardProps {
	number: number
	description: string
	svg: JSX.Element
}

export const Card: FC<CardProps> = ({ number, description, svg }) => {
	const { t } = useTranslation('statistics')
	return (
		<div className={cls.card}>
			<div className={cls.card__img}>
				<AppCircle className={cls.card__circle}>{svg}</AppCircle>
			</div>
			<span className={cls.card__number}>{number}</span>
			<p className={cls.card__description}>{t(description)}</p>
		</div>
	)
}
