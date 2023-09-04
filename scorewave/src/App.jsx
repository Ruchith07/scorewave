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
        <div className="divA">India
          <div className="scoreA"> 150/10</div>
          <div className="overs">(18.4)</div>
        </div>
        <div className="divB">Pakistan
          <div className="scoreB"> 149/2</div>
          <div className="overs">(20)</div>
        </div>        
      </div>

      <div className="result"> India won by 1 run</div>

      <div className="hello">
            <div className="SummaryAndScorecardContainer">
              <div><button id="btn" onclick="summaryclicked()">SUMMARY</button></div>
              
              <div><button id="btn" onclick="handleClick()">SCORECARD</button></div>
            </div>
      </div>
      <div className="Playerslist">
        <div className="sctitles">
          <div className="heading"></div>
        </div>

        

        <div className="values">

          <div className="list"> Batsman
          <div className="CandB">
                    <div>Sehwag</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>
                  

                  <div className="CandB">
                  <div>Ghambir</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Kohli</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Yuvraj Singhhhhhhhhh</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Suresh raina</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Yusuf Pathan</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Harbajan S</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Zaheer Khan</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>Ashish Nehra</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>R Ashwin</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>

                  <div className="CandB">
                  <div>S Sreeshanth</div>
                    <div className="bywhom">c & b Afridi</div>
                  </div>
          </div>

          <div className="runs">R
            <div className="val_run">9</div>
            <div className="val_run">6</div>
            <div className="val_run">9</div>
            <div className="val_run">6</div>
            <div className="val_run">9</div>
            <div className="val_run">6</div>
            <div className="val_run">9</div>
            <div className="val_run">6</div>
            <div className="val_run">9</div>
            <div className="val_run">6</div>
            <div className="val_run">9</div>
          </div>
          <div className="balls">B
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
            <div className="val_ball">2</div>
            <div className="val_ball">8</div>
            <div className="val_ball">2</div>
          </div>
          <div className="fours">4's
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
            <div className="val_4s">0</div>
            <div className="val_4s">1</div>
            <div className="val_4s">0</div>
          </div>
          <div className="sixes">6's
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
            <div className="val_6s">1</div>
            <div className="val_6s">0</div>
            <div className="val_6s">1</div>
          </div>
          <div className="sr">S.R
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
            <div className="val_sr">450.0</div>
            <div className="val_sr">75.0</div>
            <div className="val_sr">450.0</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
