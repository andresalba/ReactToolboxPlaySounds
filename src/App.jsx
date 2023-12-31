import './App.css'
import Button from './Button';
import Alert from './assets/Alert.mp3';
import Notification from './assets/Notification.mp3'

function App() {
  function Alerta(){
    new Audio(Alert).play()
  }
  function Notificar(){
    new Audio(Notification).play()
  }

  return (
    <>
      <Button onClick={Alerta} label="Alert" />
      <Button onClick={Notificar} label="Notify" />
    </>
  )
}

export default App
