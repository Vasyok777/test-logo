import { FunctionSvg } from '../SidebarItemSvg/FunctionSvg'
import { MenuSvg } from '../SidebarItemSvg/MenuSvg'
import { SettingsSvg } from '../SidebarItemSvg/SettingsSvg'
import { StatisticSvg } from '../SidebarItemSvg/StatisticSvg'
import { TemplateSvg } from '../SidebarItemSvg/TemplateSvg'
import { ZoneSvg } from '../SidebarItemSvg/ZoneSvg'

export const sidebarList = [
	{
		id: 1,
		name: 'Statistics',
		to: '/statistics',
		svg: <StatisticSvg />,
	},
	{
		id: 2,
		name: 'Menu',
		to: '/menu',
		svg: <MenuSvg />,
	},
	{
		id: 3,
		name: 'Zones',
		to: '/zones',
		svg: <ZoneSvg />,
	},
	{
		id: 4,
		name: 'Settings',
		to: '/settings',
		svg: <SettingsSvg />,
	},
	{
		id: 5,
		name: 'Template',
		to: '/template',
		svg: <TemplateSvg />,
	},
	{
		id: 6,
		name: 'Functions',
		to: '/functions',
		svg: <FunctionSvg />,
	},
	{
		id: 7,
		name: 'Customers',
		to: '/customers',
		svg: <FunctionSvg />,
	},
	{
		id: 8,
		name: 'LoyaltyProgram',
		to: '/loyalty-program',
		svg: <FunctionSvg />,
	},
]
