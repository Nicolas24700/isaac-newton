import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Sectionwhonewton } from './components/Sectionwhonewton'
import {Exposition} from './components/exposition'
import { Affichesection } from './components/affichesection'
import {AccueilReservation} from './components/accueil-reservation'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Sectionwhonewton />
    <Exposition />
    <Affichesection />
    <AccueilReservation />
    </>
  )
}

export default App
