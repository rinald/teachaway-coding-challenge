import React from 'react'
import type { AlbumImage, GalleryAlbum, GalleryImage } from '../types'

type Props = {
  item: GalleryAlbum | GalleryImage | AlbumImage
}

const Content: React.FC<Props> = ({ item }) => {
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

export default Content
