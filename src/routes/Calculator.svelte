<script>
  let expression = '';
  let result = '';

  function handleButtonClick(value) {
    if (value === '=') {
      try {
        result = eval(expression);
      } catch (error) {
        result = 'Error';
      }
    } else if (value === 'C') {
      expression = '';
      result = '';
    } else {
      expression += value;
    }
  }
</script>

<main>
  <h1>Simple Calculator</h1>
  <div class="calculator">
    <div class="display">
      <p>{expression}</p>
      <p>{result}</p>
    </div>
    <div class="buttons">
      <button on:click={() => handleButtonClick('7')}>7</button>
      <button on:click={() => handleButtonClick('8')}>8</button>
      <button on:click={() => handleButtonClick('9')}>9</button>
      <button on:click={() => handleButtonClick('+')}>+</button>

      <button on:click={() => handleButtonClick('4')}>4</button>
      <button on:click={() => handleButtonClick('5')}>5</button>
      <button on:click={() => handleButtonClick('6')}>6</button>
      <button on:click={() => handleButtonClick('-')}>-</button>

      <button on:click={() => handleButtonClick('1')}>1</button>
      <button on:click={() => handleButtonClick('2')}>2</button>
      <button on:click={() => handleButtonClick('3')}>3</button>
      <button on:click={() => handleButtonClick('*')}>*</button>

      <button on:click={() => handleButtonClick('0')}>0</button>
      <button on:click={() => handleButtonClick('.')}>.</button>
      <button on:click={() => handleButtonClick('=')}>=</button>
      <button on:click={() => handleButtonClick('/')}>/</button>

      <button class="clear" on:click={() => handleButtonClick('C')}>C</button>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }

  .calculator {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  .display {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 5px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  button {
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .clear {
    grid-column: span 2;
  }
</style>
