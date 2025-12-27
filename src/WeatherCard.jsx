// WeatherCard.jsx

// Recebemos a "temp" e a "cidade" através de algo chamado PROPS
function WeatherCard({ temperatura, cidade }) {
    return (
      <div className="card-clima">
        <h2>Como está o tempo em {cidade}?</h2>
        <h1 className="temperatura">
          {temperatura !== null ? `${temperatura}°C` : "Carregando..."}
        </h1>
        <p>Dica: Ótimo dia para estudar ADS! 💻</p>
      </div>
    )
  }
  
  export default WeatherCard