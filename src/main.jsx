import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.jsx'
import './styles/home.scss'
import './styles/concept.scss'
import './styles/expo.scss'
import './styles/contact.scss'
import './styles/reservation.scss'
import './styles/signin.scss'
import './styles/profile.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
