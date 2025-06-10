import './App.css'

function App() {
  
  const redirectToRecibo = () => {
    if(window.location.pathname === '/recibo') window.location.href = "Recibo.html"
    else window.location.href = "arca.html"

  }

  redirectToRecibo()

  return (
    <>
    </>
  )
}

export default App
