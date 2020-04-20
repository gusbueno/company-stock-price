import { IFavourites, ICompany } from '../../Dashboard.types'

export interface Props {
  favourites: IFavourites,
  onLoadFavourite: (company: ICompany) => void
}
