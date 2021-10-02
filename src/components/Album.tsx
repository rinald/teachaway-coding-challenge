import React, { Fragment } from 'react'

import { ArrowCircleUpIcon, ArrowCircleDownIcon } from '@heroicons/react/solid'

import Content from './Content'
import type { GalleryAlbum } from '../types'
import '../styles/Album.css'

type Props = {
  album: GalleryAlbum | null
}

// component that displays all images in a gallery album
// displayed in the dynamic album page
const Album: React.FC<Props> = ({ album }) => {
  return (
    <div className='albumWrapper'>
      {album && (
        <>
          <div className='albumTitle'>{album.title}</div>
          <div style={{ width: '300px' }}>
            <div className='imageInfo'>
              <div className='iconGroup'>
                <ArrowCircleUpIcon width={32} height={32} />
                <span>{album.ups}</span>
              </div>
              <div className='iconGroup'>
                <ArrowCircleDownIcon width={32} height={32} />
                <span>{album.downs}</span>
              </div>
              <div className='iconGroup'>
                <span>
                  <b>Score: </b> {album.score}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {album?.images.map(image => (
        <Fragment key={image.id}>
          <div className='imageTitle'>{image.title}</div>
          <div className='albumItem'>
            <Content item={image} />
            <div className='description'>{image.description}</div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Album
