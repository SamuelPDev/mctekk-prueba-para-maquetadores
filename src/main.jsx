import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Advertisement from './components/Advertisement.jsx'
import InformativeSections from './components/InformativeSections.jsx'
import OurExpertise from './components/OurExpertise.jsx'
import DealsBanner from './components/DealsBanner.jsx'
import ReviewCard from './components/ReviewCard.jsx'
import Footer from './components/Footer.jsx'
import EmailSubscription from './components/EmailSuscription.jsx'
import Topics from './components/Topics.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Advertisement />
    <Topics />
    <InformativeSections />
    <OurExpertise />
    <DealsBanner />
    <ReviewCard />
    <Footer />
    <EmailSubscription />

  </React.StrictMode>
)
