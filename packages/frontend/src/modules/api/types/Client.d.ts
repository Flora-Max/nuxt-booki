type ImageSize = 'small' | 'medium' | 'large'
type Images = { [key in ImageSize]: string }

interface Location {
  city: string
  country: string
}

interface Accommodation {
  id: number
  name: string
  trending: boolean
  location: Location
  images: Images
  tags: string[]
  price: number
  note: number
}

type Accommodations = Accommodation[]
