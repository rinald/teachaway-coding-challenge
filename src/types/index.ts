type Options = {
  section: 'hot' | 'top' | 'user'
  sort: 'viral' | 'top' | 'time ' | 'rising'
  window: 'day' | 'week' | 'month' | 'year' | 'all'
  showViral: boolean
}

type ImageData = {
  animated: boolean
  description?: string
  height: number
  gifv?: string
  id: string
  link: string
  title?: string
  type: string
  video?: string
  width: number
}

type GalleryData = {
  cover_height: number
  cover_width: number
  description?: string
  downs: number
  id: string
  images: ImageData[]
  score: number
  title: string
  ups: number
}

type Data = {
  data: GalleryData[]
}

export type { Options, ImageData, GalleryData, Data }
