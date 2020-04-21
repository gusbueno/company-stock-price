import { ICompany } from '../../Dashboard.types'

export interface Props {
  company: ICompany,
  onAddFavourite: (company: ICompany) => void,
  onRemoveFavourite: (company: ICompany) => void
}
