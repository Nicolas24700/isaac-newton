import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import Concept from './pages/concept'
import Home from './pages/home'
import Expo from './pages/expo'
import Reservation from './pages/reservation'
import Contact from './pages/contact'
import Mentionlegales from './pages/mentions'
import Signin from './pages/signin'
import Profile from './pages/profile';

import { Navbar } from './components/navbar'


import './i18n';

function App() {
  // Récupère la langue choisie dans le localStorage
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Sauvegarde la langue choisie dans le localStorage
  };

  return (
    <>
        <Router>
        <Navbar changeLanguage={changeLanguage} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/exposition" element={<Expo />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<Mentionlegales />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
