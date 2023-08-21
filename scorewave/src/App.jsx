import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="TeamNameContainer">
        <div>India</div>
        <div>VS</div>
        <div>Pakistan</div>
      </div>  
      <div className="upper">
        <div className="inner-upper"></div>
      </div>
      <div className="SummaryAndScorecardContainer">
            <div>SUMMARY</div>
            <div>SCORECARD</div>
      </div>
      <div className="Playerslist">
        <div className="sctitles">
          <div>R</div>
          <div>B</div>
          <div>4's</div>
          <div>6's</div>
          <div>S.R</div>
        </div>
                  <div>Sehwag</div>
                  <div>Ghambir</div>
                  <div>Kohli</div>
                  <div>Yuvraj Singh</div>
                  <div>Suresh Raina</div>
                  <div>Yusuf Pathan</div>
                  <div>Harbhajan Singh</div>
                  <div>Zaheer Khan</div>
                  <div>Ashish Nehra</div>
                  <div>Ravi Ashwin</div>
                  <div>S Sreesanth</div>
        </div>
    </div>
  )
}


export default App
