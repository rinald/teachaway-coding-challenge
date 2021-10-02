import React from 'react'
import { useParams } from 'react-router-dom'

import { useGalleryImage } from '../hooks/galleryHooks'
import Image from '../components/Image'

// page that displays a standalone image
const ImagePage: React.FC = () => {
  const { id } = useParams<{ id: string }>() // grab image id (hash) from url
  const image = useGalleryImage(id) // load image by id using custom hook

  return <Image image={image} />
}

export default ImagePage
