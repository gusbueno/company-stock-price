import React from 'react'

import { Props } from './Dashboard.types'
import {
  Container
} from './Dashboard.styles'
import Search from './components/Search'

const Dashboard = ({ onGetCompanyInfo }: Props) => {
  const handleSearchSubmit = (symbol: string) => {
    onGetCompanyInfo(symbol)
  }

  return (
    <Container>
      <Search onSubmit={handleSearchSubmit} />
    </Container>
  )
}

export default Dashboard
