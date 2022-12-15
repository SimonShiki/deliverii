import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStorage } from '@/utils/storage'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App storage={createStorage()} />)
