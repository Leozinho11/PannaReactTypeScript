import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen, RenderResult } from '@testing-library/react'
import theme from '../../styles/theme'

export { screen }

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
