import React from 'react'

import GalleryCard from './GalleryCard'

import { useGallery } from '../hooks/galleryHook'
import '../styles/GalleryGrid.css'

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
