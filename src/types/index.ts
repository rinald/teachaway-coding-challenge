type SectionOption = 'hot' | 'top' | 'user'
type SortOption = 'viral' | 'top' | 'time ' | 'rising'
type WindowOption = 'day' | 'week' | 'month' | 'year' | 'all'

type Options = {
  section: SectionOption
  sort: SortOption
  window: WindowOption
  showViral: boolean
}

type ImageData = {
  animated: boolean
  description?: string
  height: number
  id: string
  link: string
  title?: string
  type: string
  video?: string
  width: number
}

type GalleryData = {
  animated?: boolean
  cover_height: number
  cover_width: number
  description?: string
  downs: number
  id: string
  is_album: boolean
  images?: ImageData[]
  link?: string
  score: number
  title: string
  type?: string
  ups: number
}

type Data = {
  data: GalleryData[]
}

export type {
  SectionOption,
  SortOption,
  WindowOption,
  Options,
  ImageData,
  GalleryData,
  Data,
}
