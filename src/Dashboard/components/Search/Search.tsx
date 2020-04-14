import React, { useState, SyntheticEvent } from 'react'

import { Props } from './Search.types'
import {
  Container
} from './Search.styles'
import Input from '../../../UI/Input'
import Button from '../../../UI/Button'

const Search = ({ onSubmit }: Props) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    onSubmit(searchValue)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input />
      <Button type="submit">Search</Button>
    </Container>
  )
}

export default Search
