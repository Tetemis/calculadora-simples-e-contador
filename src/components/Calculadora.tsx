import { useState } from 'react';

export function Calculadora() {
  const [txtValor1, setTxtValor1] = useState('');
  const [txtValor2, setTextValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Preencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const total = valor1 + valor2;
    setResultado(parseFloat(total.toFixed(2)));
  };

  const dividir = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Preencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const total = valor1 / valor2;
    setResultado(parseFloat(total.toFixed(2)));
  };

  const subtrair = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Preencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const total = valor1 - valor2;
    setResultado(parseFloat(total.toFixed(2)));
  };

  const multiplicar = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Preencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const total = valor1 * valor2;
    setResultado(parseFloat(total.toFixed(2)));
  };
  return (
    <div>
      <label>Valor 1:</label>
      <input
        type="text"
        name="valor1"
        onChange={(e) => setTxtValor1(e.target.value)}
      />
      <br />
      <label>Valor 2:</label>
      <input
        type="text"
        name="valor2"
        onChange={(e) => setTextValor2(e.target.value)}
      />
      <br />
      <label>Resultado:</label>
      <input type="text" name="resultado" readOnly value={resultado} />
      <br />
      <button onClick={somar}>Somar</button>
      <button onClick={dividir}>Dividir</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
    </div>
  );
}
