import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './ora0808/Welcome.jsx'
import Paragrafus from './ora0808/paragrafus.jsx'
import Button from './ora0808/Button.jsx'
import List1 from './ora0808/lista.jsx'
import WelcomeMessage from './ora0808/WelcomeMessage.jsx'
import ListWithButton from './ora0808/ListWithButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
       <Welcome/>
       <Paragrafus/>
       <Button/>
       <List1/>
        <WelcomeMessage/>
        <ListWithButton/>
    </>
  )
}

export default App
