import { Theme, DeepPartial, Colors } from '@chakra-ui/react'
import { lighten, darken } from '@chakra-ui/theme-tools'

const generateColorPalette = (color: string, theme: Theme): DeepPartial<Colors> => ({
  50: lighten(color, 50)(theme),
  100: lighten(color, 40)(theme),
  200: lighten(color, 30)(theme),
  300: lighten(color, 15)(theme),
  400: lighten(color, 5)(theme),
  500: darken(color, 0)(theme),
  600: darken(color, 7)(theme),
  700: darken(color, 12)(theme),
  800: darken(color, 18)(theme),
  900: darken(color, 23)(theme),
})

const KLEROS = '#4d00b3'
const DARK = '#344147'
const LIGHT = '#c9b2e8'

export const colors = (theme: Theme): Record<string, DeepPartial<Colors>> => ({
  primary: generateColorPalette(KLEROS, theme),
  kleros: generateColorPalette(KLEROS, theme),
  light: generateColorPalette(LIGHT, theme),
  dark: generateColorPalette(DARK, theme),
})
