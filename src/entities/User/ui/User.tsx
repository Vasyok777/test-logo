import { FC } from 'react'

import ArrowDown from 'shared/assets/icon/arrow-down.svg'
import Ava from 'shared/assets/icon/ava.jpg'
import { classNames } from 'shared/lib/classNames'

import cls from './User.module.scss'

interface UserProps {
	className?: string
}

export const User: FC<UserProps> = ({ className }) => {
	return (
		<div className={classNames(cls.user, {}, [className])}>
			<div className={cls.user__img}>
				<img src={Ava} alt="Ava" />
			</div>
			<div className={cls.user__arrow}>
				<img src={ArrowDown} alt="Arrow" />
			</div>
		</div>
	)
}
