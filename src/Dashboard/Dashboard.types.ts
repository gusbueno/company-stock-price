export interface DashboardState {
  company: any,
  favourites: Array<any>
}

interface DashboardDefaultAction {
  type: string
}

export type DashboardActionTypes = DashboardDefaultAction

export interface DashboardProps {
  onGetCompanyInfo: (symbol: string) => void
}

export type Props = DashboardProps