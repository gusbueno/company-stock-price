export const FETCH_COMPANY_DATA_SUCCESS: string = 'FETCH_COMPANY_DATA_SUCCESS'
export const ADD_FAVOURITE: string = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE: string = 'REMOVE_FAVOURITE'
export const FETCH_COMPANY_DATA_START: string = 'FETCH_COMPANY_DATA_START'
export const FETCH_COMPANY_DATA_FAIL: string = 'FETCH_COMPANY_DATA_FAIL'

export interface IQuote {
  open: number,
  close: number,
  closeTime: string,
  change: number,
  changePercent: string,
  previousClose: number,
  marketCap: string,
  high: number,
  low: number,
  peRatio: number,
  volume: number,
  week52Low: number,
  week52High: number,
  iexRealtimePrice: number,
  iexLastUpdated: string,
  isUSMarketOpen: boolean
}

export interface ICompany {
  symbol: string,
  companyName: string,
  website: string,
  description: string,
  CEO: string,
  employees: number,
  quote: IQuote,
  isFavourite: boolean
}

export interface IFavourite {
  symbol: string,
  companyName: string
}

export interface IFavourites {
  [key: string]: IFavourite
}

export interface DashboardState {
  company: ICompany,
  favourites: IFavourites,
  isFetching: boolean
}

interface DashboardCompanyStartAction {
  type: typeof FETCH_COMPANY_DATA_START
}

interface DashboardCompanySuccessAction {
  type: typeof FETCH_COMPANY_DATA_SUCCESS,
  company: ICompany
}

interface DashboardCompanyFailAction {
  type: typeof FETCH_COMPANY_DATA_FAIL
}

interface DashboardAddFavouriteAction {
  type: typeof ADD_FAVOURITE,
  company: ICompany
}

interface DashboardRemoveFavouriteAction {
  type: typeof REMOVE_FAVOURITE,
  company: ICompany
}

export type DashboardActionTypes =
  DashboardCompanySuccessAction |
  DashboardAddFavouriteAction |
  DashboardRemoveFavouriteAction |
  DashboardCompanyStartAction |
  DashboardCompanyFailAction

export interface DashboardProps {
  onGetCompanyInfo: (symbol: string) => void,
  onAddFavourite: (company: ICompany) => void,
  onRemoveFavourite: (company: ICompany) => void
}

export type Props = DashboardProps & DashboardState