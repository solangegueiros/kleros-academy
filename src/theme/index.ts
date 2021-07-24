import { extendTheme, theme as chakraTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'
import { styles } from './global'
import { mdx } from './mdx'
const fonts = { body: `'Rubik', sans-serif`, mono: `'Consolas', monospace` }

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'kleros',
}

export const theme = extendTheme({
  config,
  styles,
  colors: colors(chakraTheme),
  fonts,
  components,
  shadows: {
    outline: 'none',
  },
  mdx,
})
