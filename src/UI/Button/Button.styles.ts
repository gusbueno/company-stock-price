import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { ButtonProps } from './Button.types'
import { colors } from '../core'

export const ButtonStyled = styled.button(({
  theme,
  ml,
  mt,
  mr,
  mb
}: ButtonProps) => {
  const whiteThemeStyle = css`
    color: black;
    border: 1px solid ${colors.primary};
  `
  const themeStyle = css`
    background-color: ${colors[theme]};
    ${colors[theme] === colors.white && whiteThemeStyle}
  `

  const marginLeftStyle = css`
    margin-left: ${ml}px;
  `

  const marginTopStyle = css`
    margin-top: ${mt}px;
  `

  const marginRightStyle = css`
    margin-right: ${mr}px;
  `

  const marginBottomStyle = css`
    margin-bottom: ${mb}px;
  `

  return css`
    height: 32px;
    font-size: 16px;
    font-family: Roboto;
    border-radius: 10px;
    box-sizing: border-box;
    border: 0;
    padding: 0 16px;
    outline: none;
    color: ${colors.white};

    &:hover, :focus {
      cursor: pointer;
      background-color: ${rgba(colors[theme], 0.9)};
    }

    &:disabled {
      background-color: ${rgba(colors[theme], 0.9)};
      cursor: not-allowed;
    }

    ${theme && themeStyle}
    ${ml && marginLeftStyle}
    ${mt && marginTopStyle}
    ${mr && marginRightStyle}
    ${mb && marginBottomStyle}
  `
})
