import styled, { css } from 'styled-components'

import { colors } from '../core'

export const InputStyled = styled.input`
  display: flex;
  flex: 1;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  height: 32px;
  font-family: Roboto;
  background-color: #eeeeee;

  &:focus {
    border-color: ${colors.primary};
    background-color: ${colors.white};
  }
`
