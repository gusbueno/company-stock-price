import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import {
  Container
} from './CompanyDetailLoading.styles'

const CompanyDetailLoading = () => (
  <Container>
    <FontAwesomeIcon icon={faSpinner} size="2x" pulse />
  </Container>
)

export default CompanyDetailLoading
