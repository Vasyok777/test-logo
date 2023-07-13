import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames'

import {
	cardDescMonth,
	cardDescSeven,
	cardDescToday,
	tabsTitle,
} from '../const/card'

import { Card } from './Card'
import cls from './Statistics.module.scss'

const Statistics = memo(() => {
	const { t } = useTranslation('statistics')
	const [activeTab, setActiveTab] = useState(1)

	const cards =
		activeTab === 1
			? cardDescToday
			: activeTab === 2
			? cardDescSeven
			: cardDescMonth

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}
	return (
		<div className={cls.statistics}>
			<div className={cls.statistics__top}>
				<div className={cls['statistics__top-main']}>
					<h1 className={classNames('title', {}, [cls.title])}>{t('Hi')}</h1>
					<h5 className={cls.subtitle}>{t('Subtitle')}</h5>
				</div>
				<ul className={cls.tabs}>
					{tabsTitle.map((item) => (
						<li
							key={item.id}
							className={item.id === activeTab ? cls.active : ''}
							onClick={() => handleTabClick(item.id)}
						>
							{t(item.title)}
						</li>
					))}
				</ul>
			</div>
			<div className={cls.box}>
				{cards.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</div>
	)
})
export default Statistics
