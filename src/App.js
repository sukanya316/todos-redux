import store from './store'
import { Provider } from 'react-redux'
import Todos from './components/Todos'

const App=()=>(
  <Provider store={store}>
    <Todos/>
  </Provider>
)

export default App