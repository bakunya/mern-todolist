import { Provider } from 'react-redux'

import store from '@/redux/store'
import Routes from '@/components/Routes'
import { persistor, PersistGate } from '@/redux/store'

function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
                <Routes />
          </PersistGate>
      </Provider>
  )
}

export default App
