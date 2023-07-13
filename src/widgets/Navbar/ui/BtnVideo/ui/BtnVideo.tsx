import { FC, PropsWithChildren } from 'react'

import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'

import cls from './BtnVideo.module.scss'

interface BtnVideoProps {
	className?: string
	onClick?: () => void
}
export const BtnVideo: FC<BtnVideoProps & PropsWithChildren> = ({
	children,
	className,
	onClick,
}) => {
	return (
		<Button onClick={onClick} className={classNames(cls.btn, {}, [className])}>
			{children}
		</Button>
	)
}
