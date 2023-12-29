import ReactDOM from 'react-dom/client'
import './index.css'
import Todo from './components/Todo'
import Screen from './components/Screen'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Todo></Todo>
    <Screen />
  </>
  // </React.StrictMode>,
)
