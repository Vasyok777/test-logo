import { useState } from 'react'

import NotificationSvg from 'shared/assets/icon/notification.svg'
import { AppCircle } from 'shared/ui/AppCircle'

import cls from './Notification.module.scss'

export const Notification = () => {
	const [getNotification, setGetNotification] = useState(1)
	return (
		<div className={cls.notification}>
			<AppCircle className={cls.notification__circle}>
				<img src={NotificationSvg} alt="Notification" />
			</AppCircle>
			{getNotification === 0 ? (
				''
			) : (
				<AppCircle className={cls.notification__number}>
					{getNotification}
				</AppCircle>
			)}
		</div>
	)
}
