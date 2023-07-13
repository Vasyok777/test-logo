import { memo, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ArrowDown from 'shared/assets/icon/arrow-down.svg'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

import cls from './LangSwitcher.module.scss'

type PopupClick = MouseEvent & {
	path: Node[]
}
export const LangSwitcher = memo(() => {
	const { i18n } = useTranslation()
	const ref = useRef<HTMLDivElement>(null)
	const lang = ['ua', 'en']
	const [selected, setSelected] = useState(lang[0])
	const [open, setOpen] = useState(false)

	const handleClickListItem = () => {
		setOpen((prev) => !prev)
	}
	const handleChangeLang = (item: string) => {
		setSelected(item)
		setOpen(false)
	}
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClick

			if (ref.current && !_event.composedPath().includes(ref.current)) {
				setOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])
	const toggle = async (item: string) => {
		if (i18n.language !== item) {
			i18n.changeLanguage(item)
		}
	}
	return (
		<div className={cls.lang} ref={ref}>
			<span onClick={handleClickListItem} className={cls.lang__name}>
				{selected}
				<img
					src={ArrowDown}
					className={classNames(cls.lang__arrow, { [cls.active]: open }, [])}
					alt=""
				/>
			</span>
			<ul className={cls.lang__list}>
				{open &&
					lang.map((item) => (
						<li
							key={item}
							onClick={() => {
								handleChangeLang(item)
								toggle(item)
							}}
						>
							<Button theme={ThemeButton.CLEAR} className={cls.btn}>
								{item}
							</Button>
						</li>
					))}
			</ul>
		</div>
	)
})
