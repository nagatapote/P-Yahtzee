import { App, Yahtzee } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/yahtzee',
    element: <Yahtzee />,
  },
])
