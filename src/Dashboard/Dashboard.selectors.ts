import { createSelector } from 'reselect'
import { IStore } from '../store'

const getDashboard = ({ dashboard }: IStore) => dashboard

export const getCompany = createSelector(
  [getDashboard],
  ({ company }) => company
)

export const getFavourites = createSelector(
  [getDashboard],
  ({ favourites }) => favourites
)

export const getIsFetching = createSelector(
  [getDashboard],
  ({ isFetching }) => isFetching
)
