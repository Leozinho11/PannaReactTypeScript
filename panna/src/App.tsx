/* eslint-disable react/react-in-jsx-scope */
import Body from 'components/body/body'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import Router from './utils/routes/router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Body>
        <Router />
      </Body>
    </ThemeProvider>
  )
}

export default App
