import React from 'react';

import { View } from 'react-native';
import { Theme, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const Box = styled(
  View,
  {
    // 'bg': '$pink500',
    'bg': '$pink900',

    // '.modern': {
    //   bg: '$blue200',
    //   p: 200,
    // },
    // '.dark': {
    //   bg: '$pink900',
    //   // p: 200,
    // },
    // 'bg': '$bgcolorlight',
    'p': '$10',
    ':hover': {
      bg: '$blue200',
      // '.dark': {
      //   bg: '$pink500',
      //   p: '$20',
      //   //   '.notmodern': {r
      //   //     bg: '$purple400',
      //   //   },
      // },
    },
    // '@base': {
    //   // '_light': {
    //   '.dark': {
    //     bg: '$red500',
    //     p: '$12',
    //   },
    // },
    // '@sm': {
    //   // '_light': {
    // '.dark': {
    //   bg: 'red',
    //   p: '$20',
    // },
    // },
    // },
    // },

    // '_dark': {
    //   bg: '$red500',
    // },
  },
  {
    componentName: 'MyBox',
  }
);
export function MultipleTheme() {
  // console.log('>>>>>  component');
  return (
    <Wrapper>
      <Theme name="dark">
        <Theme name="modern">
          {/* <Theme name="notmodern">
        <Theme name="modern"> */}
          <Box
            states={{ hover: true }}
            // sx={{
            //   '.dark': {
            //     'bg': '$green500',
            //     '.modern': {
            //       bg: '$yellow400',
            //     },
            //   },
            //   // bg: '$bgcolorlight',
            // }}
          ></Box>
        </Theme>
      </Theme>
      {/* <Box
        states={{ hover: true }}
        sx={
          {
            // bg: '$bgcolorlight',
          }
        }
      ></Box> */}
      {/* </Theme>
      </Theme> */}
      {/* </Theme> */}
    </Wrapper>
  );
}

export default MultipleTheme;
