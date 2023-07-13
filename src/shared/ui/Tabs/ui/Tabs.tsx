import { ReactNode, memo, useCallback } from 'react'

export interface TabItem {
	value: string
	content: ReactNode
}
interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string
	onTabClick: (tab: TabItem) => void
}
export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, onTabClick, value } = props

	const clickHandle = useCallback(
		(tab: TabItem) => () => {
			onTabClick(tab)
		},
		[onTabClick]
	)
	return (
		<div>
			{tabs.map((tab) => {
				const isSelected = tab.value === value
				return <div>{tab.content}</div>
			})}
		</div>
	)
})
