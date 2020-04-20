import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBusinessTime } from '@fortawesome/free-solid-svg-icons'

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

const CompanyDetail = ({ company, onAddFavourite, onRemoveFavourite }: Props) => {
  const handleAddFavourite = () => {
    onAddFavourite(company)
  }

  const handleRemoveFavourite = () => {
    onRemoveFavourite(company)
  }

  return (
    <Container>
      <Header>
        <CompanyNameWrapper>
          <CompanyNameText>{company.companyName}</CompanyNameText>
          <CompanySymbolText>({company.symbol})</CompanySymbolText>
        </CompanyNameWrapper>
        <Button theme={company.isFavourite ? 'secondary' : 'white'} onClick={ company.isFavourite ? handleRemoveFavourite : handleAddFavourite}>
          <FontAwesomeIcon icon={faHeart} />
        </Button>
      </Header>
      <Content>
        <PriceWrapper>
          <CloseValueText>{company.quote.close ? company.quote.close : company.quote.iexRealtimePrice}</CloseValueText>
          <ChangeValueText
            isNegative={company.quote.change < 0}
          >
            <span>{company.quote.change}</span>
          </ChangeValueText>
          <ChangeValueText
            isNegative={company.quote.change < 0}
          >
            (<span>{company.quote.changePercent}%</span>)
          </ChangeValueText>
        </PriceWrapper>
        <CloseTimeText>
          {company.quote.isUSMarketOpen ?
            <span><FontAwesomeIcon icon={faBusinessTime} /> Market open</span> :
            `At close: ${company.quote.closeTime}`
          }
        </CloseTimeText>

        <Grid>
          <Cell>
            <CellTitleText>Previous Close</CellTitleText>
            <CellValueText>{company.quote.previousClose}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Open</CellTitleText>
            <CellValueText>
              {company.quote.open ?
                company.quote.open :
                <FontAwesomeIcon icon={faBusinessTime} />
              }
            </CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Market Cap</CellTitleText>
            <CellValueText>{company.quote.marketCap}T</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>High</CellTitleText>
            <CellValueText>
              {company.quote.high ?
                company.quote.high :
                <FontAwesomeIcon icon={faBusinessTime} />
              }
            </CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Low</CellTitleText>
            <CellValueText>
              {company.quote.low ?
                company.quote.low :
                <FontAwesomeIcon icon={faBusinessTime} />
              }
            </CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>PE Ratio</CellTitleText>
            <CellValueText>{company.quote.peRatio}</CellValueText>
          </Cell>
          <Cell>
            <CellTitleText>Volume</CellTitleText>
            <CellValueText>
              {company.quote.volume ?
                company.quote.volume :
                <FontAwesomeIcon icon={faBusinessTime} />
              }
            </CellValueText>
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
