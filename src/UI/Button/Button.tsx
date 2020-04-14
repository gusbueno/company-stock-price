import React, { forwardRef } from 'react'

import { Props } from './Button.types'

const Button = forwardRef<HTMLButtonElement, Props>(({ children, type = 'button', ...others }, ref) => {
  return (
  <button ref={ref} {...others}>{children}</button>
  )
})

export default Button
