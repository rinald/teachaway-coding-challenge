import React from 'react'

import { ArrowCircleUpIcon, ArrowCircleDownIcon } from '@heroicons/react/solid'

import Content from './Content'
import type { GalleryImage } from '../types'
import '../styles/Album.css'

type Props = {
  image: GalleryImage | null
}

const Image: React.FC<Props> = ({ image }) => {
  return (
    <div className='albumWrapper'>
      {image && (
        <>
          <div className='imageTitle'>{image.title}</div>
          <div className='albumItem'>
            <Content item={image} />
            <div className='description'>{image.description}</div>
            <div className='imageInfo'>
              <div className='iconGroup'>
                <ArrowCircleUpIcon width={32} height={32} />
                <span>{image.ups}</span>
              </div>
              <div className='iconGroup'>
                <ArrowCircleDownIcon width={32} height={32} />
                <span>{image.downs}</span>
              </div>
              <div className='iconGroup'>
                <span>
                  <b>Score: </b> {image.score}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Image
