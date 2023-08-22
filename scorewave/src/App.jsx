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
        <div className="divA">Team A
          <div className="score"> score </div>
        </div>
        <div className="divB">Team B</div>
        
      </div>
      <div className="hello">
            <div className="SummaryAndScorecardContainer">
              <div>SUMMARY</div>
              <div>SCORECARD</div>
            </div>
      </div>
      <div className="Playerslist">
        <div className="sctitles">
          <div>Batting</div>
        </div>

        <div className="list"> 
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

        <div className="values">
          <div className="runs">R
            <div className="val_run">9</div>
            <div className="val_run">6</div>
          </div>
          <div className="balls">B
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
          </div>
          <div className="fours">4's
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
          </div>
          <div className="sixes">6's
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
          </div>
          <div className="sr">S.R
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
