import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18.6 9.82c-.52-.21-1.15-.25-1.54.15l-7.07 7.06c-.39.39-.36 1.03-.15 1.54.12.3.16.6.16.93a2.5 2.5 0 0 1-5 0c0-.26-.24-.5-.5-.5a2.5 2.5 0 1 1 .96-4.82c.5.21 1.14.25 1.53-.15l7.07-7.06c.39-.39.36-1.03.15-1.54-.12-.3-.21-.6-.21-.93a2.5 2.5 0 0 1 5 0c.01.26.24.49.5.5a2.5 2.5 0 1 1-.9 4.82Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Bone'
export const Bone = React.memo(Icon)
