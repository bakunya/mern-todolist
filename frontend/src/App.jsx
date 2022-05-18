import { Provider } from 'react-redux'

import store from '@/redux/store'
import Routes from '@/components/Routes'
import { persistor, PersistGate } from '@/redux/store'

function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
                <Routes /> 
                <footer className="w-[300px] mx-auto mb-[50px] mt-[100px]"><a href="https://github.com/bakunya/" className="text-white -skew-x-6 -skew-y-2 p-2 bg-dark-green text-xl hover:skew-x-0 hover:skew-y-0 transition-all duration-300 hover:rounded-[15px] hover:shadow-xl active:skew-x-0 active:skew-y-0 active:rounded-[15px] active:shadow-xl focus:skew-x-0 focus:skew-y-0 focus:rounded-[15px] focus:shadow-xl block w-full text-center outline-none py-3" target="_blank">Created by Github@Bakunya</a></footer>
          </PersistGate>
      </Provider>
  )
}

export default App
