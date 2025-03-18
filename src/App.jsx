import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import Concept from './pages/concept'
import Home from './pages/home'
import { Navbar } from './components/navbar'

import './i18n';

function App() {
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
      <Route path="/home" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
