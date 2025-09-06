import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!altura || !peso) return;

    const alturaM = altura / 100; // converte cm -> metros
    const valorIMC = (peso / (alturaM * alturaM)).toFixed(2);

    setImc(valorIMC);
    setClassificacao(classificarIMC(valorIMC));
  };

  const classificarIMC = (valor) => {
    if (valor < 18.5) return "Magreza";
    if (valor >= 18.5 && valor < 24.9) return "Normal";
    if (valor >= 25 && valor < 29.9) return "Sobrepeso";
    if (valor >= 30 && valor < 34.9) return "Obesidade Grau I";
    if (valor >= 35 && valor < 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III";
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>

      {imc && (
        <div className="resultado">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}

      <h2>Tabela de Classificação do IMC</h2>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 18.5</td>
            <td>Magreza</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25 - 29.9</td>
            <td>Sobrepeso</td>
          </tr>
          <tr>
            <td>30 - 34.9</td>
            <td>Obesidade Grau I</td>
          </tr>
          <tr>
            <td>35 - 39.9</td>
            <td>Obesidade Grau II</td>
          </tr>
          <tr>
            <td>Maior ou igual a 40</td>
            <td>Obesidade Grau III</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
