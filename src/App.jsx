import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBer from './component/NavBer/NavBer'
import PriceList from './component/PriceList/PriceList'
import Dashbord from './component/Dashbord/Dashbord'
import PhonBar from './component/Phonbar/PhonBar'
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

function App() {

  return (
    <div className="App">
      <NavBer></NavBer>
      <PriceList></PriceList>
      <Dashbord></Dashbord>
      <PhonBar></PhonBar>
    </div>
  )
}

export default App
