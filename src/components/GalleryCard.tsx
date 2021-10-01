import React from 'react'

import type { GalleryData, ImageData } from '../types'
import '../styles/GalleryCard.css'

type Props = {
  data: GalleryData
}

const GalleryCard: React.FC<Props> = ({ data }) => {
  const getContent = () => {
    let cover: ImageData | GalleryData

    if (data.is_album && data.images !== undefined) {
      cover = data.images[0]
    } else {
      cover = data
    }

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
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default GalleryCard
