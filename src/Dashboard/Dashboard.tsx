import React from 'react'

import { Props } from './Dashboard.types'
import {
  Container
} from './Dashboard.styles'
import Search from './components/Search'
import CompanyDetailEmpty from './components/CompanyDetailEmpty'
import CompanyDetail from './components/CompanyDetail'

const Dashboard = ({ onGetCompanyInfo, company }: Props) => {
  const handleSearchSubmit = (symbol: string) => {
    onGetCompanyInfo(symbol)
  }

  return (
    <Container>
      <Search onSubmit={handleSearchSubmit} />
      {company ?
        <CompanyDetail /> :
        <CompanyDetailEmpty />
      }
    </Container>
  )
}

export default Dashboard
