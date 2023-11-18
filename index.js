var valor1 = parseFloat(prompt('insira um valor: '))

var valor2 = parseFloat(prompt('insira um valor: '))

var operador = prompt('Digite o símbolo da operacão: ')


function multiplicar () {

  var mult = valor1 * valor2;

  console.log(mult)

  return mult;

  }


function dividir (valor1,valor2) {

      var div = valor1/valor2

      console.log(div)  

  return div

  }


Const somar (valor1,valor2) => {

  var som = valor1 + valor2;

  console.log(som)

  return som;

  }


function subtrair (valor1,valor2) {

  var sub = valor1 - valor2;

  console.log(sub)

  return sub;

  }


Switch (operador) {

    case "*":

      multiplicar(valor1,valor2)

      

    break;


    case "/":

      dividir(valor1,valor2)

      if ((valor1%valor2)!=0){

        console.log (valor1%valor2)

      }

      

    break;


    case "+":

     somar(valor1,valor2)

      

    break;


    case "-":

     subtrair(valor1,valor2)

      

    break;

  

}