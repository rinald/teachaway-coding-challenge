// option types
type SectionOption = 'hot' | 'top' | 'user'
type SortOption = 'viral' | 'top' | 'time ' | 'rising'
type WindowOption = 'day' | 'week' | 'month' | 'year' | 'all'

// gallery filtering options type
type Options = {
  section: SectionOption
  sort: SortOption
  window: WindowOption
  showViral: boolean
}

// base interface for gallery item fields
// of the gallery API endpoint
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

// base interface for an image field
interface Image {
  id: string
  type: string
  animated: boolean
  width: number
  height: number
  link: string
}

// interface for gallery items that are not albums
interface GalleryImage extends GalleryItem, Image {
  is_album: false
}

// interface for images part of the 'images' field of GalleryAlbum
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

// interface for gallery items that are albums
interface GalleryAlbum extends GalleryItem {
  is_album: true
  images_count: number
  images: AlbumImage[]
}

// gallery API endpoint response type
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
