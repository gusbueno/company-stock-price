import styled from 'styled-components'
import { rgba } from 'polished'

import { colors } from '../../../UI/core'

export const Container = styled.section`
  display: flex;
  width: 100%;
  margin: 15px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 200px;
    margin-left: 10px;
    border-left: 1px solid ${colors.green};
    padding: 0 10px;
  }
`

export const Title = styled.h3`
  font-family: Roboto;
  margin: 0 0 10px 0;
`

export const FavouriteItem = styled.div`
  display: flex;
  padding: 5px;
  border-bottom: 1px solid ${colors.green};
  font-family: Roboto;
  font-size: 16px;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background-color: ${rgba('black', 0.2)};
  }
`

export const FavouriteSymbolText = styled.span`
  color: ${colors.secondary};
`

export const FavouriteNameText = styled.span`
  font-weight: bold;
`
