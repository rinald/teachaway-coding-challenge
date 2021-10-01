import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import type { GalleryResponse } from '../types'

import { OptionsContext } from '../App'

const useGallery = () => {
  const [response, setResponse] = useState<GalleryResponse | null>(null)
  const [options] = useContext(OptionsContext)

  useEffect(() => {
    const getImages = async () => {
      const { section, sort, window, showViral } = options

      const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/?showViral=${showViral}`

      const data = await axios.get(url, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        },
      })

      return data
    }

    setResponse(null)
    getImages().then(res => {
      setResponse(res.data)
    })
  }, [options])

  return response?.data
}

const useGalleryAlbum = (id: string) => {}

const useGalleryImage = (id: string) => {}

export { useGallery, useGalleryAlbum, useGalleryImage }
