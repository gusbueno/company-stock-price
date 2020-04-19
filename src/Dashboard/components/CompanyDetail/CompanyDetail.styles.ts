import styled, { css } from 'styled-components'

import { colors } from '../../../UI/core'

interface INegativeText {
  isNegative: boolean
}

export const Container = styled.section`
  display: flex;
  padding: 15px 0;
  box-sizing: border-box;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

export const CompanyNameWrapper = styled.div`
  display: flex;
`

export const CompanyNameText = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.primary};
`
export const CompanySymbolText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  color: ${colors.secondary};
`

export const Content = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const CloseValueText = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: Roboto;
  line-height: 24px;
  margin-right: 5px;
  color: ${colors.primary};
`

export const ChangeValueText = styled.span(({ isNegative }: INegativeText) => {
  const negativeStyle = css`
    color: ${colors.secondary};
  `

  return css`
    font-size: 16px;
    font-family: Roboto;
    margin-right: 5px;
    color: ${colors.green};

    ${isNegative && negativeStyle}
  `
})

export const CloseTimeText = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: ${colors.primary};
`

export const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px, 1fr));
  grid-gap: 5px;
`

export const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 16px;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.green};
`

export const CellTitleText = styled.span`
  white-space: nowrap;
`

export const CellValueText = styled.span`
  font-weight:  bold;
`