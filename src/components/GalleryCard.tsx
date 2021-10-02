import React from 'react'
import { Link } from 'react-router-dom'

import Content from './Content'
import type { GalleryAlbum, GalleryImage } from '../types'

import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  ChatIcon,
} from '@heroicons/react/solid'

import '../styles/GalleryCard.css'

type Props = {
  item: GalleryAlbum | GalleryImage
}

// gallery item component
// all items are of fixed size (300 x 300 px)
// displayed as part of a grid
const GalleryCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='galleryCard'>
      <Link to={item.is_album ? `/album/${item.id}` : `/image/${item.id}`}>
        <div className='contentWrapper'>
          <Content item={item} />
        </div>
      </Link>
      {item.is_album && (item as GalleryAlbum).images_count > 1 && (
        <div className='albumCount'>{item.images_count}</div>
      )}
      <div className='titleBar'>
        <div className='itemTitle'>{item.title}</div>
        <div className='bottomIcons'>
          <div className='iconGroup'>
            <ArrowCircleUpIcon width={24} height={24} />
            <span>{item.ups}</span>
            <ArrowCircleDownIcon width={24} height={24} />
          </div>
          <div className='iconGroup'>
            <ChatIcon width={24} height={24} />
            <span>{item.comment_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
