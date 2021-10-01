import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import type { Data } from '../types'

import { OptionsContext } from '../App'

const useGallery = () => {
  const [data, setData] = useState<Data | null>(null)
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

    getImages().then(response => {
      setData(response.data)
    })
  }, [options])

  return data
}

export { useGallery }
