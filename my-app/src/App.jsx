import { useState, useEffect } from 'react'
import './App.css'
import SingleButton from './Btn'
import CountDownTimmer from './Timer'
import Spinner from './LoadingSpinner'

function App() {

  const [ generated, setGenerated ] = useState(false);
  const [ loading, setLoading ] = useState(false)
  const [ time, setTime ] = useState(0);

  const handleGenerateClick = async() => {
    
    if(!generated && !loading){
      
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setGenerated(true)
      setLoading(false)
    } 
  }

  const timming = () => {
    setTime(5);
  }
  useEffect(() => {
    if(time <= 0) {
      resetIsGenerated();
      return;
    }

    const timer = setTimeout(() => {
        setTime(prev => prev  - 1);
      }, 1000)
      return () => clearTimeout(timer)
  },[time])

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
          <SingleButton vartiation='generate' onClick={handleGenerateClick} color={generated ? 'color' : ''} disabled={generated || loading}>Generate</SingleButton>
        </div>
        <div className='qr-code-content'>
          {loading ? <Spinner/> 
          : 
          <>{generated ? <div className='qr-code-scanner' style={{backgroundColor: 'green'}}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-qrcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 17l0 .01" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 7l0 .01" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M17 7l0 .01" /><path d="M14 14l3 0" /><path d="M20 14l0 .01" /><path d="M14 14l0 3" /><path d="M14 20l3 0" /><path d="M17 17l3 0" /><path d="M20 17l0 3" /></svg>
            <SingleButton vartiation='generate-qr-code' color='color' disabled={generated || loading}>Generate</SingleButton>
          </div> 
          : 
          <div className='qr-code-scanner'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-qrcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 17l0 .01" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 7l0 .01" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M17 7l0 .01" /><path d="M14 14l3 0" /><path d="M20 14l0 .01" /><path d="M14 14l0 3" /><path d="M14 20l3 0" /><path d="M17 17l3 0" /><path d="M20 17l0 3" /></svg>
            <SingleButton vartiation='generate-qr-code' onClick={async() => {
              await handleGenerateClick()
              timming()
            }}>Generate</SingleButton>
          </div>}
          <div>{time}</div>
          {/* {generated ? <div>{time}</div> : <h1>0s</h1>} */}
          {generated ? <SingleButton vartiation='download'>Download</SingleButton> : <SingleButton vartiation='download'  color='color'>Download</SingleButton>}</>}
          
        </div>
      </div>
    </>
  )
}

export default App;
