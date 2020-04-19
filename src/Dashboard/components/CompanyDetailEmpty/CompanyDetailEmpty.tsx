import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp, faBuilding } from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  MainText
} from './CompanyDetailEmpty.styles'

const CompanyDetailEmpty = () => (
  <Container>
    <FontAwesomeIcon icon={faHandPointUp} size="4x" />
    <MainText>
      Use the search bar to look for a company <FontAwesomeIcon icon={faBuilding} />
    </MainText>
  </Container>
)

export default CompanyDetailEmpty
