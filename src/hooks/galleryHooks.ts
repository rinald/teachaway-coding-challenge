import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import type { GalleryAlbum, GalleryImage } from '../types'

import { OptionsContext } from '../App'

// utility function to get the response from a url
// at a public API endpoint
const getFromUrl = async (url: string) => {
  const res = await axios.get(url, {
    // the gallery endpoint requires an authorization header
    // of the form 'Client-ID <your-client-id>'
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  })

  return res
}

// custom hook to load gallery items based on filtering options
const useGallery = () => {
  // create items state and initialize as null
  const [items, setItems] = useState<(GalleryAlbum | GalleryImage)[] | null>(
    null,
  )

  // load filtering options from global context
  const [options] = useContext(OptionsContext)

  // reload items every time there is a change in options
  useEffect(() => {
    const getImages = async () => {
      const { section, sort, window, showViral } = options
      const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/?showViral=${showViral}`

      return await getFromUrl(url)
    }

    setItems(null) // reset the state to null, used for loading effect purposes
    getImages().then(res => {
      setItems(res.data.data) // populate items with new data
    })
  }, [options])

  return items
}

// custom hook to a gallery album by its id
const useGalleryAlbum = (id: string) => {
  const [album, setAlbum] = useState<GalleryAlbum | null>(null)

  // load album
  useEffect(() => {
    const getAlbum = async () => {
      const url = `https://api.imgur.com/3/gallery/album/${id}`
      return await getFromUrl(url)
    }

    getAlbum().then(res => {
      setAlbum(res.data.data)
    })
  }, [id])

  return album
}

// custom hook to load a standalone image by its id
const useGalleryImage = (id: string) => {
  const [image, setImage] = useState<GalleryImage | null>(null)

  // load image
  useEffect(() => {
    const getImage = async () => {
      const url = `https://api.imgur.com/3/gallery/image/${id}`

      return await getFromUrl(url)
    }

    getImage().then(res => {
      setImage(res.data.data)
    })
  }, [id])

  return image
}

export { useGallery, useGalleryAlbum, useGalleryImage }
