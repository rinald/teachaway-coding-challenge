import React from 'react'

import GalleryCard from './GalleryCard'

import { useGallery } from '../hooks/galleryHooks'
import '../styles/GalleryGrid.css'

// gallery item grid
// supports responsive layout
const GalleryGrid: React.FC = () => {
  // load gallery data using custom hook
  const items = useGallery()

  return (
    <div className='galleryGrid'>
      {items?.map(item => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default GalleryGrid
