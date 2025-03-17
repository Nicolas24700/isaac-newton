import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Sectionwhonewton } from './components/Sectionwhonewton'
import {Exposition} from './components/exposition'
import { Affichesection } from './components/affichesection'
import {AccueilReservation} from './components/accueil-reservation'
import { Footer } from './components/footer'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Sectionwhonewton />
    <Exposition />
    <Affichesection />
    <AccueilReservation />
    <Footer />
    </>
  )
}

export default App
