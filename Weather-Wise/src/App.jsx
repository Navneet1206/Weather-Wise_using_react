import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonUsage from './button'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import WeatherApp from './weatherapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <WeatherApp />
      </div>
    </>
  )
}

export default App
