import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import {
  ICompany,
  DashboardActionTypes,
  FETCH_COMPANY_DATA_SUCCESS
} from './Dashboard.types'
import { IStore } from '../store'
import { to } from '../utils'

const TOKEN: string = process.env.IEX_TOKEN || ''

const fetchCompanyDataSuccess = (company: ICompany): DashboardActionTypes => ({
  type: FETCH_COMPANY_DATA_SUCCESS,
  company
})

export const getCompanyInfo = (symbol: string): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch): Promise<any> => {
    const [err, result] = await to(Promise.all([
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${TOKEN}`),
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${TOKEN}`)
    ]))
    
    if (err) {
      return console.log(err)
    }
    
    const companyData = result[0].data
    const companyQuoteData = result[1].data
    dispatch(fetchCompanyDataSuccess(companyData))
  }
}
