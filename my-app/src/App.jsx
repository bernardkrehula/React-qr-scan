import { useState, useEffect } from 'react'
import './App.css'
import SingleButton from './Btn'
import Spinner from './LoadingSpinner'

function App() {
  const [ generated, setGenerated ] = useState(false);
  const [ loading, setLoading ] = useState(false)
  const [ time, setTime ] = useState(5);

  const handleGenerateClick = () => {
    setTime(5);
  }
  
  useEffect(() => {
    if(time <= 0) {
      resetIsGenerated();
      return;
    }
     if(time >= 5) setLoading(true)
     const loadingTimer = setTimeout(() => {
      setLoading(false)
      setGenerated(true)  
    },2000)
    return () => { clearTimeout(loadingTimer) }
  },[time])

  useEffect(() => {
    if(!loading && time > 0){
      const timer = setTimeout(() => {
        setTime(prev => prev  - 1);
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [loading, time])

  const resetIsGenerated = () => {
    setGenerated(prev => !prev);
  }
  //Dodati loading spinner na pocetak 1s
  //Prebaciti timer u app.jsx
  //Pojednostaviti jsx (ne treba toliko ternary operatora)
  return (
    <>
      <div className='main'> 
        <div className='generate-div'>
          <SingleButton onClick={async() => {handleGenerateClick()}} disabled={generated || loading}>Generate</SingleButton>
        </div>
        <div className='qr-code-content'>
          {loading ? <Spinner/> 
          :
          <>
          <div className='qr-code-scanner' aria-disabled={generated}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-qrcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 17l0 .01" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 7l0 .01" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M17 7l0 .01" /><path d="M14 14l3 0" /><path d="M20 14l0 .01" /><path d="M14 14l0 3" /><path d="M14 20l3 0" /><path d="M17 17l3 0" /><path d="M20 17l0 3" /></svg>
            <SingleButton onClick={() => {handleGenerateClick()}} disabled={generated}>Generate</SingleButton>
          </div>
          <div className='countdown-timer'>{time}s</div>
          <SingleButton disabled={!generated}>Download</SingleButton>
          </>}
          </div>
      </div>
    </>
  )
}

export default App;
