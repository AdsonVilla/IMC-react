import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function calcularIMC() {
    const heightInCm = height / 100;
    const imc = weight / (heightInCm * heightInCm);

    if (imc < 18.6) {
      setMessage("Peso abaixo do ideal! IMC: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Peso ideal! IMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage("Levemente acima do peso! IMC: " + imc.toFixed(2));
    } else {
      setMessage("Cuidado, alerta de obesidade! IMC: " + imc.toFixed(2));
    }
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <span>Calcule seu IMC aqui!</span>
      <div className="content">
        <input
          className="input"
          type="text"
          placeholder="Digite seu peso em Kg (ex: 70)"
          value={weight}
          onChange={(ev) => setWeight(ev.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Digite sua altura em cm (ex: 160)"
          value={height}
          onChange={(ev) => setHeight(ev.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
