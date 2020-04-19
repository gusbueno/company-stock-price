import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import {
  getCompany,
  getFavourites
} from './Dashboard.selectors'
import { getCompanyInfo } from './Dashboard.actions'

export const mapStateToProps = (state: IStore) => ({
  company: getCompany(state),
  favourites: getFavourites(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetCompanyInfo: bindActionCreators(getCompanyInfo, dispatch)
})
