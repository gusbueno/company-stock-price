import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import store from '../store'
import { getCompanyInfo } from './Dashboard.actions'

export const mapDispatchToProps = (dispatch: ThunkDispatch<typeof store, unknown, AnyAction>) => ({
  onGetCompanyInfo: bindActionCreators(getCompanyInfo, dispatch)
})
