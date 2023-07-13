import { CustomersPage } from 'pages/CustomersPage'
import { FunctionsPage } from 'pages/FunctionsPage'
import { LoyaltyProgramPage } from 'pages/LoyaltyProgramPage'
import { MenuPage } from 'pages/MenuPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { SettingsPage } from 'pages/SettingsPage'
import { StatisticsPage } from 'pages/StatisticsPage'
import { TemplatePage } from 'pages/TemplatePage'
import { ZonesPage } from 'pages/ZonesPage'
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { App } from 'app/App'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback="...">
						<StatisticsPage />
					</Suspense>
				),
			},
			{
				path: '/statistics',
				element: (
					<Suspense fallback="...">
						<StatisticsPage />
					</Suspense>
				),
			},
			{
				path: '/menu',
				element: (
					<Suspense fallback="...">
						<MenuPage />
					</Suspense>
				),
			},
			{
				path: '/customers',
				element: (
					<Suspense fallback="...">
						<CustomersPage />
					</Suspense>
				),
			},
			{
				path: '/functions',
				element: (
					<Suspense fallback="...">
						<FunctionsPage />
					</Suspense>
				),
			},
			{
				path: '/loyalty-program',
				element: (
					<Suspense fallback="...">
						<LoyaltyProgramPage />
					</Suspense>
				),
			},
			{
				path: '/settings',
				element: (
					<Suspense fallback="...">
						<SettingsPage />
					</Suspense>
				),
			},
			{
				path: '/template',
				element: (
					<Suspense fallback="...">
						<TemplatePage />
					</Suspense>
				),
			},
			{
				path: '/zones',
				element: (
					<Suspense fallback="...">
						<ZonesPage />
					</Suspense>
				),
			},
			{
				path: '*',
				element: (
					<Suspense fallback="...">
						<NotFoundPage />
					</Suspense>
				),
			},
		],
	},
])
