import React from 'react'

import { Props } from './FavouriteList.types'
import { IFavourite } from '../../Dashboard.types'
import {
  Container,
  Title,
  FavouriteItem,
  FavouriteSymbolText,
  FavouriteNameText
} from './FavouriteList.styles'

const FavouriteList = ({ favourites, onLoadFavourite }:  Props) => {
  const renderList = () => {
    return Object.keys(favourites).map((key: string) => {
      const favourite: IFavourite = favourites[key]
      return (
        <FavouriteItem key={key} onClick={() => onLoadFavourite(favourite.symbol)}>
          <FavouriteSymbolText>{favourite.symbol}</FavouriteSymbolText>
          <FavouriteNameText>{favourite.companyName}</FavouriteNameText>
        </FavouriteItem>
      )
    })
  }

  return (
    <Container>
      <Title>Your favourites</Title>
      {renderList()}
    </Container>
  )
}

export default FavouriteList
