import React from 'react'
import { useParams } from 'react-router-dom'

import { useGalleryAlbum } from '../hooks/galleryHooks'
import Album from '../components/Album'

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const album = useGalleryAlbum(id)

  return <Album album={album} />
}

export default AlbumPage
