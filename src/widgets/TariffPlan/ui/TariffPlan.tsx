import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

import cls from './TariffPlan.module.scss'

interface TariffPlanProps {
	className?: string
}

export const TariffPlan: FC<TariffPlanProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.tariff, {}, [className])}>
			<span className={cls.tariff__day}>{t('Zero-day')}</span>
			<p className={cls.tariff__text}>{t('remained')}</p>
			<Button theme={ThemeButton.TARIFF}>{t('Tariff btn')}</Button>
		</div>
	)
}
