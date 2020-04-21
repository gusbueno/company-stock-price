import styled from 'styled-components'

import { colors } from '../UI/core'

export const Container = styled.section`
  display: flex;
  padding: 10px;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${colors.lightGreen};
`

export const ContentWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`
