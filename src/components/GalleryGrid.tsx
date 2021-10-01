import React from 'react'

import GalleryCard from './GalleryCard'

import { useGallery } from '../hooks/galleryHook'
import '../styles/GalleryGrid.css'

const GalleryGrid: React.FC = () => {
  // load gallery data using custom hook
  const data = useGallery()

  return (
    <div className='galleryGrid'>
      {data?.data.map(item => (
        <GalleryCard key={item.id} galleryData={item} />
      ))}
    </div>
  )
}

export default GalleryGrid
