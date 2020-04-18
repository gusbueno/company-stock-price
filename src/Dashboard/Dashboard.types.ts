export const FETCH_COMPANY_DATA_SUCCESS: string = 'FETCH_COMPANY_DATA_SUCCESS'

export interface IQuote {
  open: number,
  openTime: number,
  close: number,
  closeTime: number,

}

export interface ICompany {
  symbol: string,
  companyName: string,
  website: string,
  description: string,
  CEO: string,
  employees: number,
  quote: IQuote
}

export interface DashboardState {
  company: ICompany,
  favourites: Array<ICompany>
}

interface DashboardCompanyAction {
  type: typeof FETCH_COMPANY_DATA_SUCCESS,
  company: ICompany
}

export type DashboardActionTypes = DashboardCompanyAction

export interface DashboardProps {
  onGetCompanyInfo: (symbol: string) => void
}

export type Props = DashboardProps & DashboardState