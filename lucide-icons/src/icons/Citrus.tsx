import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5.51 18.49a12 12 0 0 0 16.12.78c.49-.41.49-1.15.03-1.6L6.34 2.33a1.08 1.08 0 0 0-1.6.03A12 12 0 0 0 5.5 18.5Z" />
      <Path d="M8.34 15.66a8 8 0 0 0 10.4.78c.54-.4.54-1.16.06-1.64L9.2 5.2c-.48-.48-1.25-.48-1.64.06a8 8 0 0 0 .78 10.4Z" />
      <Path d="m14 10-5.5 5.5" />
      <Path d="M14 10v8" />
      <Path d="M14 10H6" />
    </StyledSvg>
  )
}
Icon.displayName = 'Citrus'
export const Citrus = React.memo(Icon)
