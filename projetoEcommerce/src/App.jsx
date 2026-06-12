import {Route, Routes} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div className = "app">
    <Routes>
      <Route path = "/" />
      <Route path = "/auth" />
      <Route path = "/checkout" />
    </Routes>
  </div>;
  
}
export default App
