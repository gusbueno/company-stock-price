import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Props } from './CompanyDetail.types'
import {
  Container,
  Header,
  CompanyNameWrapper,
  CompanyNameText,
  CompanySymbolText,
  Content,
  PriceWrapper,
  CloseValueText,
  ChangeValueText,
  CloseTimeText,
  Grid,
  Cell,
  CellTitleText,
  CellValueText
} from './CompanyDetail.styles'
import Button from '../../../UI/Button'

const CompanyDetail = ({ company }: Props) => {
  return (
    <Container>
      <Header>
        <CompanyNameWrapper>
          <CompanyNameText>{company.companyName}</CompanyNameText>
          <CompanySymbolText>({company.symbol})</CompanySymbolText>
        </CompanyNameWrapper>
        <Button theme="white">
          <FontAwesomeIcon icon={faHeart} />
        </Button>
      </Header>
      <Content>
        <PriceWrapper>
          <CloseValueText>{company.quote.close}</CloseValueText>
          <ChangeValueText
            isNegative={company.quote.change < 0}
          >
            {company.quote.change}
          </ChangeValueText>
          <ChangeValueText
            isNegative={company.quote.change < 0}
          >
            ({company.quote.changePercent}%)
          </ChangeValueText>
        </PriceWrapper>
        <CloseTimeText>At close: {company.quote.closeTime}</CloseTimeText>

        <Grid>
          <Cell>
            <CellTitleText>Previous Close</CellTitleText>
            <CellValueText>{company.quote.previousClose}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Open</CellTitleText>
            <CellValueText>{company.quote.open}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Market Cap</CellTitleText>
            <CellValueText>{company.quote.marketCap}T</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>High</CellTitleText>
            <CellValueText>{company.quote.high}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Low</CellTitleText>
            <CellValueText>{company.quote.low}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>PE Ratio</CellTitleText>
            <CellValueText>{company.quote.peRatio}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Volume</CellTitleText>
            <CellValueText>{company.quote.volume}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>52 Week Range</CellTitleText>
            <CellValueText>{company.quote.week52Low} - {company.quote.week52High}</CellValueText>
          </Cell>
        </Grid>
      </Content>
    </Container>
  )
}

export default CompanyDetail
