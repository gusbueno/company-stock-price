import React, { forwardRef } from 'react'

import { Props } from './Button.types'
import {
  ButtonStyled
} from './Button.styles'

const Button = forwardRef<HTMLButtonElement, Props>(({
    children,
    type = 'button',
    theme = 'primary',
    isDisabled = false,
    ml,
    mt,
    mr,
    mb,
    ...others
  }, ref) => {
  return (
    <ButtonStyled
      ref={ref}
      theme={theme}
      disabled={isDisabled}
      ml={ml}
      mt={mt}
      mr={mr}
      mb={mb}
      {...others}
    >
      {children}
    </ButtonStyled>
  )
})

export default Button
