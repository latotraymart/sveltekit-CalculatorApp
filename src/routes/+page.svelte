<script>
  import { onMount } from 'svelte';
  let input = '';
  let result = '';
  const apiUrl = '/api/calculate';

  const operators = ['+', '-', '*', '/'];

  const calculate = () => {
    try {
      result = new Function(`return ${input}`)();
    } catch (error) {
      result = 'Error';
    }
  };

  const handleOperatorClick = (op) => () => {
    if (input.length > 0 && !operators.includes(input[input.length - 1])) {
      input += op;
    }
  };

  const handleNumberClick = (num) => () => {
    input += num;
  };

  const clearInput = () => {
    input = '';
    result = '';
  };
</script>

<main>
  <h1><center>Simple Calculator</center></h1>

  <div class="calculator">
    <div class="input-box">
      <input type="text" value={input} disabled />
    </div>

    <div class="result-box">
      <p>{result}</p>
    </div>

    <div class="buttons">
      <button on:click={handleNumberClick(7)}>7</button>
      <button on:click={handleNumberClick(8)}>8</button>
      <button on:click={handleNumberClick(9)}>9</button>
      <button on:click={handleOperatorClick('+')}>+</button>

      <button on:click={handleNumberClick(4)}>4</button>
      <button on:click={handleNumberClick(5)}>5</button>
      <button on:click={handleNumberClick(6)}>6</button>
      <button on:click={handleOperatorClick('-')}>-</button>

      <button on:click={handleNumberClick(1)}>1</button>
      <button on:click={handleNumberClick(2)}>2</button>
      <button on:click={handleNumberClick(3)}>3</button>
      <button on:click={handleOperatorClick('*')}>*</button>

      <button on:click={handleNumberClick(0)}>0</button>
      <button on:click={calculate}>=</button>
      <button on:click={clearInput}>C</button>
      <button on:click={handleOperatorClick('/')}>/</button>
    </div>
  </div>
</main>

<style>
  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .input-box {
    margin-bottom: 10px;
  }

  input {
    width: 200px;
    height: 30px;
    font-size: 20px;
    text-align: right;
    pointer-events: none;
  }

  .result-box {
    margin-bottom: 10px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-gap: 5px;
  }

  button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    background-color: blueviolet;
  }
  
</style>




 



