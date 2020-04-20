import React from 'react'

import { Props } from './Dashboard.types'
import {
  Container,
  ContentWrapper
} from './Dashboard.styles'
import Search from './components/Search'
import CompanyDetailEmpty from './components/CompanyDetailEmpty'
import CompanyDetail from './components/CompanyDetail'
import FavouriteList from './components/FavouriteList'

const Dashboard = ({ onGetCompanyInfo, company, onAddFavourite, onRemoveFavourite, favourites }: Props) => {
  const handleGetCompanyInfo = (symbol: string) => {
    onGetCompanyInfo(symbol)
  }

  return (
    <Container>
      <Search onSubmit={handleGetCompanyInfo} />
      <ContentWrapper>
        {company ? (
          <CompanyDetail
            company={company}
            onAddFavourite={onAddFavourite}
            onRemoveFavourite={onRemoveFavourite}  
          />
        ) : <CompanyDetailEmpty />}
        <FavouriteList favourites={favourites} onLoadFavourite={handleGetCompanyInfo} />
      </ContentWrapper>
    </Container>
  )
}

export default Dashboard
