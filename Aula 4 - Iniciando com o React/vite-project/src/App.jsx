import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header 
        titulo="Oi"
        texto="Bem vindo"
        cor="red"/>
      <Header 
        titulo="Blabla"
        texto="Estamos conversando"
        cor="green"/>
      <Header 
        titulo="Tchau"
        texto="To indo embora"
        cor="blue"/>
    </>
  )
}

export default App
