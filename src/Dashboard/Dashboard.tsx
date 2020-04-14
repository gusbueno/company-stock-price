import React from 'react'

import {
  Container
} from './Dashboard.styles'
import Search from './components/Search'

const Dashboard = () => {
  return (
    <Container>
      <Search onSubmit={search => console.log(search)} />
    </Container>
  )
}

export default Dashboard
