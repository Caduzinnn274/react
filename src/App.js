import Nome from './nome'
import { useState } from 'react';

function App() {
  const [pessoa, setPessoa]=useState("Carlos");

  function trocarNome(pessoa){
    setPessoa(pessoa);
  }
  return (
    <div className="App">
      <h1>Usando componentes</h1>
      <h2>Olá {pessoa}</h2>
      <h3>Usando componentes</h3>
      <br></br>
      <Nome pessoa='Carlos' idade = {27}></Nome>
      <br></br>
      <Nome pessoa='Diego' idade = {12}></Nome>
      <button onClick={() =>trocarNome('Testando a troca de nome')}>
        Mudar de nome
      </button>
    </div>
  );
}

export default App;
