import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import store from '../store'
import { to } from '../utils'

const TOKEN: string = process.env.IEX_TOKEN || ''

export const getCompanyInfo = (symbol: string): ThunkAction<Promise<any>, typeof store, undefined, any> => {
  return async (dispatch): Promise<any> => {
    const [err, data] = await to(Promise.all([
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${TOKEN}`),
      axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${TOKEN}`)
    ]))
    
    err && console.log(err)
    data && console.log(data)

    dispatch({ type: 'HOLA' })
  }
}
