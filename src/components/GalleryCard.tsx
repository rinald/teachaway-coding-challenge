import React from 'react'

import type { AlbumImage, GalleryAlbum, GalleryImage } from '../types'
import '../styles/GalleryCard.css'

type Props = {
  item: GalleryAlbum | GalleryImage
}

const GalleryCard: React.FC<Props> = ({ item }) => {
  const getContent = () => {
    let cover: AlbumImage | GalleryImage

    if (item.is_album) {
      cover = (item as GalleryAlbum).images[0]
    } else {
      cover = item as GalleryImage
    }

    if (cover.animated && cover.type !== 'image/gif') {
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
      {item.is_album && (item as GalleryAlbum).images_count > 1 && (
        <div className='albumCount'>{item.images_count}</div>
      )}
      <div className='titleBar'>
        <span>{item.title}</span>
      </div>
    </div>
  )
}

export default GalleryCard
