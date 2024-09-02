import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (event) => {
    event.preventDefault();

    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
      setClassificacao(calcularClassificacao(imcCalculado));
    }
  };

  const calcularClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do Peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso Normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade Grau I';
    if (imc >= 35 && imc < 39.9) return 'Obesidade Grau II';
    if (imc >= 40) return 'Obesidade Grau III';
    return 'Classificação não encontrada!'
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );

}

export default App
