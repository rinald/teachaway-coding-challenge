import React from 'react'

import type { GalleryData } from '../types'
import '../styles/GalleryCard.css'

type Props = {
  galleryData: GalleryData
}

const GalleryCard: React.FC<Props> = ({ galleryData }) => {
  const getContent = () => {
    const cover = galleryData.images[0]

    if (cover.animated) {
      return (
        <video draggable={false} playsInline autoPlay loop muted>
          <source type={cover.type} src={cover.link} />
        </video>
      )
    } else {
      return <img src={cover.link} alt={cover.title ?? 'Imgur image'} />
    }
  }

  return (
    <div className='galleryCard'>
      <div className='contentWrapper'>{getContent()}</div>
      <div className='titleBar'>
        <p>{galleryData.title}</p>
      </div>
    </div>
  )
}

export default GalleryCard
