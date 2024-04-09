import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './style.scss'
import './global.css'
import 'tailwindcss/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>


    </QueryClientProvider>
  </React.StrictMode>



)
