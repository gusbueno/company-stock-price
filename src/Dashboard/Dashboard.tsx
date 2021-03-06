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
import CompanyDetailLoading from './components/CompanyDetailLoading'

const Dashboard = ({ onGetCompanyInfo, company, onAddFavourite, onRemoveFavourite, favourites, isFetching }: Props) => {
  const handleGetCompanyInfo = (symbol: string) => {
    onGetCompanyInfo(symbol)
  }

  const renderCompanyDetail = () => {
    return company ? (
      <CompanyDetail
        company={company}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    ) : <CompanyDetailEmpty />
  }

  return (
    <Container>
      <Search onSubmit={handleGetCompanyInfo} />
      <ContentWrapper>
        {isFetching ? <CompanyDetailLoading /> : renderCompanyDetail()}
        <FavouriteList favourites={favourites} onLoadFavourite={handleGetCompanyInfo} />
      </ContentWrapper>
    </Container>
  )
}

export default Dashboard
