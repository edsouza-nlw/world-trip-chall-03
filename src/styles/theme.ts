import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
export const theme = extendTheme({
  config,
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    brand: {
      '400': '#1D1D1D',
    },
    base_orange: {
      '400': '#FFBA08',
      '50': '#FFF7EA',
    },
    base_dark: {
      '400': '#000000',
      '300': '#47585B',
      '200': '#999999',
    },
    base_white: {
      '400': '#DADADA',
      '200': '#F5FBFA',
      '50': '#FFFFFF',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.400',
        color: 'gray.600',
      },
      span: {
        fontSize: '38px',
        fontWeight: '500',
        color: 'base_orange.400',
        padding: '0.15rem',
      },
    },
  },
})

const overrides = extendTheme({
  styles: {
    global: (props) => ({
      '.swiper-container': {
        width: '300px',
      },
    }),
  },
})
