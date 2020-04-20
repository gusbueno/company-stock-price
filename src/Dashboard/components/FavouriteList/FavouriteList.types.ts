import { IFavourites } from '../../Dashboard.types'

export interface Props {
  favourites: IFavourites,
  onLoadFavourite: (symbol: string) => void
}
