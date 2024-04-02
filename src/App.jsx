import './App.css'
import TaskContainer from './components/TaskContainer'
import store from './redux/store'
import { Provider } from "react-redux"
store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <TaskContainer />
    </Provider>
  )
}

export default App
