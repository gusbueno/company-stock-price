export interface DashboardState {
  company: any,
  favourites: Array<any>
}

interface DashboardDefaultAction {
  type: string
}

export type DashboardActionTypes = DashboardDefaultAction
