import React from 'react'
import { createRoot } from 'react-dom/client'
// import './app/layout/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
