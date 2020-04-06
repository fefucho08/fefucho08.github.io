  function comecar(){alert("Para separar os inteiros dos decimais use PONTO, nunca use vírgulas")
nome=prompt("Informe seu nome")
peso=prompt("Informe seu peso (em kg)")
altura=prompt("Informe sua altura")
IMC= peso/(altura*altura)
if(IMC<17){final= "Muito abaixo do peso"}
if(17<=IMC){final= "Abaixo do peso"}
if(18.5<=IMC){final= "Peso normal"}
if(25<=IMC){final= "Acima do peso"}
if(30<=IMC){final= "Obesidade I"}
if(35<=IMC){final= "Obesidade II"}

resultado.innerHTML= "Seu Resultado"
botao.innerHTML="Refaça o teste!"
                     lista.innerHTML= `<li> Nome: ${nome} </li>
<li> Peso: ${peso}kg </li>
<li> Altura: ${altura}m</li>
<li> IMC: ${IMC}</li>
<li> Você está: ${final}</li>`
    
  }
console.log("Veio mudar meu site né safado")