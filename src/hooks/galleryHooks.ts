import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import type { GalleryAlbum, GalleryImage } from '../types'

import { OptionsContext } from '../App'

const getFromUrl = async (url: string) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  })

  return res
}

const useGallery = () => {
  const [items, setItems] = useState<(GalleryAlbum | GalleryImage)[] | null>(
    null,
  )
  const [options] = useContext(OptionsContext)

  useEffect(() => {
    const getImages = async () => {
      const { section, sort, window, showViral } = options
      const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/?showViral=${showViral}`

      return await getFromUrl(url)
    }

    setItems(null)
    getImages().then(res => {
      setItems(res.data.data)
    })
  }, [options])

  return items
}

const useGalleryAlbum = (id: string) => {
  const [album, setAlbum] = useState<GalleryAlbum | null>(null)

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

const useGalleryImage = (id: string) => {
  const [image, setImage] = useState<GalleryImage | null>(null)

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
