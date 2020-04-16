import React from 'react'

import { colors } from '../core'

export interface Props {
  /* Text value of the button */
  children: string,
  /* Whether the button is a submit or a button */
  type?: 'submit' | 'button',
  /* Color of the button */
  theme?: keyof typeof colors,
  /* Whether the button is disabled or not */
  isDisabled?: boolean,
  /* Margin left */
  ml?: number,
  /* Margin top */
  mt?: number,
  /* Margin right */
  mr?: number,
  /* Margin bottom */
  mb?: number
}
