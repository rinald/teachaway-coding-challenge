import React from 'react'
import { useParams } from 'react-router-dom'

import { useGalleryImage } from '../hooks/galleryHooks'
import Image from '../components/Image'

const ImagePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const image = useGalleryImage(id)

  return <Image image={image} />
}

export default ImagePage
