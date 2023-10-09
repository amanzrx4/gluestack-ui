import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    borderRadius: '$full',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bg: '$gray.400',
    variants: {
      withBadge: {},
      size: {
        'xs': {
          w: '$6',
          h: '$6',

          _badge: {
            w: '$2',
            h: '$2',
          },

          _text: {
            fontSize: '$2xs',
          },
        },

        'sm': {
          w: '$8',
          h: '$8',

          _badge: {
            w: '$2',
            h: '$2',
          },

          _text: {
            fontSize: '$xs',
          },
        },

        'md': {
          w: '$12',
          h: '$12',

          _badge: {
            w: '$3',
            h: '$3',
          },

          _text: {
            fontSize: '$md',
          },
        },

        'lg': {
          w: '$16',
          h: '$16',

          _badge: {
            w: '$4',
            h: '$4',
          },

          _text: {
            fontSize: '$xl',
          },
        },

        'xl': {
          w: '$24',
          h: '$24',

          _badge: {
            w: '$6',
            h: '$6',
          },

          _text: {
            fontSize: '$3xl',
          },
        },

        '2xl': {
          w: '$32',
          h: '$32',

          _badge: {
            w: '$8',
            h: '$8',
          },

          _text: {
            fontSize: '$5xl',
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'Avatar',
    descendantStyle: ['_badge', '_text'],
    ancestorStyle: ['_avatar'],
  } as const
);
