import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './WeatherCard' // 1. Importamos o componente novo

function App() {
  const [temp, setTemp] = useState(null)

  async function buscarClima() {
    try {
      const resposta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-27.4679&longitude=153.0281&current_weather=true")
      const dados = await resposta.json()
      setTemp(dados.current_weather.temperature)
    } catch (error) {
      console.error("Erro:", error)
    }
  }

  useEffect(() => {
    buscarClima()
  }, [])

  return (
    <div className="container">
      <h1>📍 Meu Dashboard de Intercâmbio</h1>
      
      {/* 2. Usamos o componente e passamos os dados via PROPS */}
      <WeatherCard temperatura={temp} cidade="Brisbane" />

      <button onClick={buscarClima} className="reset">
        Atualizar Clima
      </button>
    </div>
  )
}

export default App