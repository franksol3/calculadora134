function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;
  
    // Reemplazar la raíz cuadrada con Math.sqrt()
    expression = expression.replace('√', 'Math.sqrt');
  
    // Reemplazar el exponente con Math.pow()
    expression = expression.replace('^', '**');
  
    // Evaluar la expresión matemática
    var result = eval(expression);
    display.value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  