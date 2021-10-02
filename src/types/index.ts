type SectionOption = 'hot' | 'top' | 'user'
type SortOption = 'viral' | 'top' | 'time ' | 'rising'
type WindowOption = 'day' | 'week' | 'month' | 'year' | 'all'

type Options = {
  section: SectionOption
  sort: SortOption
  window: WindowOption
  showViral: boolean
}

interface GalleryItem {
  id: string
  title: string
  description?: string
  views: number
  comment_count: number
  favorite_count: number
  ups: number
  downs: number
  points: number
  score: number
  is_album: boolean
}

interface Image {
  id: string
  type: string
  animated: boolean
  width: number
  height: number
  link: string
}

interface GalleryImage extends GalleryItem, Image {
  is_album: false
}

interface AlbumImage extends Image {
  is_album: false
  title?: string
  description?: string
  views: number
  comment_count?: number
  favorite_count?: number
  ups?: number
  downs?: number
  points?: number
  score?: number
}

interface GalleryAlbum extends GalleryItem {
  is_album: true
  images_count: number
  images: AlbumImage[]
}

type GalleryResponse = {
  data: (GalleryAlbum | GalleryImage)[]
  success: boolean
  status: number
}

export type {
  SectionOption,
  SortOption,
  WindowOption,
  Options,
  AlbumImage,
  GalleryAlbum,
  GalleryImage,
  GalleryResponse,
}
