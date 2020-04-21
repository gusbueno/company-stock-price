import React, { useState, SyntheticEvent } from 'react'

import { Props } from './Search.types'
import {
  Container
} from './Search.styles'
import Input from '../../../UI/Input'
import Button from '../../../UI/Button'

const Search = ({ onSubmit }: Props) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    onSubmit(searchValue)
    setSearchValue('')
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        value={searchValue}
        onChange={handleChange}
        type="search"
        placeholder="Search company by symbol"
      />
      <Button ml={10} type="submit">Search</Button>
    </Container>
  )
}

export default Search
