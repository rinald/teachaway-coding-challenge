import React from 'react'
import { useParams } from 'react-router-dom'

import { useGalleryAlbum } from '../hooks/galleryHooks'
import Album from '../components/Album'

// page that displays all images in a particular gallery album
const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>() // grab album id (hash) from url
  const album = useGalleryAlbum(id) // load album by id using custom hook

  return <Album album={album} />
}

export default AlbumPage
