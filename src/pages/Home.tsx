import React from 'react'

import AppBar from '../components/AppBar'
import GalleryGrid from '../components/GalleryGrid'

// the main page
const Home: React.FC = () => {
  return (
    <>
      <AppBar />
      <GalleryGrid />
    </>
  )
}

export default Home
