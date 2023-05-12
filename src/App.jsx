import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState('')
  function formatTime(val) {
        if(val < 10){
            return '0';
        }
        else{
          return '';
        }
  }
  
  useEffect(() => {
    const timeId = setInterval(
      () => tick(), 1000)

      return function cleanup(){
        clearInterval(timeId)
      }
  })

  function tick(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s); 
  }

  return (
    <>
    <div className='clock'>
      <div className='screan'>
          <h1 className='time'>{time}</h1>
      </div>
    </div>
    </>
  )
}

export default App
