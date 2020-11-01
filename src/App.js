import { ChakraProvider } from '@chakra-ui/core'
import customTheme from './theme'
import AppBar from './components/appBar/AppBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SitesView from 'features/sites/SitesView'

console.log(customTheme)

function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <AppBar />
        <Switch>
          <Route path="/sites">
            <SitesView />
          </Route>
          <Route path="/">HOME</Route>
        </Switch>
      </ChakraProvider>
    </Router>
  )
}

export default App
