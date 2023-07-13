import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from 'app/providers/router'
import 'app/styles/index.scss'

import 'shared/config/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
