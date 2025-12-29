import { useState } from 'react'

function Checklist() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Tirar o Visto Australiano", concluida: true },
    { id: 2, texto: "Comprar dólares australianos (AUD)", concluida: false }
  ])
  const [novaTarefa, setNovaTarefa] = useState("")

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      const item = {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false
      }
      setTarefas([...tarefas, item]) // O "spread operator" (...) é essencial no React!
      setNovaTarefa("") // Limpa o campo
    }
  }

  return (
    <div className="card">
      <h3>📋 Checklist para Brisbane</h3>
      <div className="input-group">
        <input 
          type="text" 
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Ex: Reservar acomodação..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map(t => (
          <li key={t.id} style={{ margin: '10px 0', textAlign: 'left' }}>
            <input type="checkbox" checked={t.concluida} readOnly />
            <span style={{ marginLeft: '10px' }}>{t.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Checklist