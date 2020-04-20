import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import {
  ICompany,
  IQuote,
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

const normalizeCompanyData = (companyData: any, quoteData: any): ICompany => {
  const { symbol, companyName, website, description, CEO, employees } = companyData
  const {
    open,
    close,
    closeTime,
    change,
    changePercent,
    previousClose,
    marketCap,
    high,
    low,
    peRatio,
    volume,
    week52Low,
    week52High,
    iexRealtimePrice,
    isUSMarketOpen
  } = quoteData

  const quote: IQuote = {
    open,
    close,
    closeTime: new Date(closeTime).toUTCString(),
    change: parseFloat(change.toFixed(2)),
    changePercent: (changePercent * 100).toFixed(2),
    previousClose,
    marketCap: marketCap.toString().slice(0, marketCap.toString().length - 9),
    high,
    low,
    peRatio,
    volume,
    week52Low,
    week52High,
    iexRealtimePrice,
    isUSMarketOpen
  }

  return {
    symbol,
    companyName,
    website,
    description,
    CEO,
    employees,
    quote
  }
}

export const getCompanyInfo = (symbol: string): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch): Promise<any> => {
    const [err, result] = await to(Promise.all([
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${TOKEN}`),
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${TOKEN}`)
    ]))
    
    if (err) {
      return console.log(err)
    }

    const company: ICompany = normalizeCompanyData(result[0].data, result[1].data)
    dispatch(fetchCompanyDataSuccess(company))
  }
}
