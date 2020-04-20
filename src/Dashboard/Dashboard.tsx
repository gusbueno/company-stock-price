import React from 'react'

import { Props } from './Dashboard.types'
import {
  Container
} from './Dashboard.styles'
import Search from './components/Search'
import CompanyDetailEmpty from './components/CompanyDetailEmpty'
import CompanyDetail from './components/CompanyDetail'

const Dashboard = ({ onGetCompanyInfo, company, onAddFavourite, onRemoveFavourite }: Props) => {
  const handleSearchSubmit = (symbol: string) => {
    onGetCompanyInfo(symbol)
  }

  return (
    <Container>
      <Search onSubmit={handleSearchSubmit} />
      {company ? (
        <CompanyDetail
          company={company}
          onAddFavourite={onAddFavourite}
          onRemoveFavourite={onRemoveFavourite}  
        />
      ) : <CompanyDetailEmpty />
      }
    </Container>
  )
}

export default Dashboard
